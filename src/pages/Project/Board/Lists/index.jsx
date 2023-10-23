import React, { useState } from "react";
import { StyledLists } from "./Styles";
import List from "./List";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateStatusAction } from "redux/action/taskAction";
import { flushSync } from 'react-dom';

export default function Lists({ lstTask }) {
  const dispatch = useDispatch();
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    setListTask(lstTask);
  }, [lstTask]);

  const renderList = () =>
    listTask.map((status, index) => {
      return <List key={index} status={status} />;
    });

  const handleTaskDropEnd = ({ destination, source, draggableId }) => {
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    const data = reorderQuoteMap({
      quoteMap: listTask,
      source,
      destination,
      draggableId,
      dispatch,
    });

    localStorage.setItem("listTask", JSON.stringify(data.quoteMap));
   
       flushSync(() => {
        return setListTask(data.quoteMap);
         });  // https://github.com/atlassian/react-beautiful-dnd/issues/2475
  };

  return (
    <DragDropContext onDragEnd={handleTaskDropEnd}>
      <StyledLists>{listTask && renderList()}</StyledLists>
    </DragDropContext>
  );
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const reorderQuoteMap = ({
  quoteMap,
  source,
  destination,
  draggableId,
  dispatch,
}) => {
  const current = [...quoteMap[Number(source.droppableId) - 1].lstTaskDeTail];
  const next = [...quoteMap[Number(destination.droppableId) - 1].lstTaskDeTail];
  const target = current[source.index];
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    const columnCurrent = {
      ...quoteMap[Number(source.droppableId) - 1],
      lstTaskDeTail: reordered,
    };
    const result = [...quoteMap];
    
    result.splice([Number(source.droppableId) - 1], 1, columnCurrent);
    return {
      quoteMap: result,
    };
  }
  current.splice(source.index, 1);
  next.splice(destination.index, 0, target);
  const columnCurrent = {
    ...quoteMap[Number(source.droppableId) - 1],
    lstTaskDeTail: current,
  };
  const columnNext = {
    ...quoteMap[Number(destination.droppableId) - 1],
    lstTaskDeTail: next,
  };
  const result = [...quoteMap];
  result.splice([Number(source.droppableId) - 1], 1, columnCurrent);
  result.splice([Number(destination.droppableId) - 1], 1, columnNext);
  const requestData = {
    taskId: Number(draggableId),
    statusId: destination.droppableId,
  };
  dispatch(updateStatusAction(requestData));
  return {
    quoteMap: result,
  };
};
