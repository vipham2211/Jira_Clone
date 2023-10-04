import React from 'react'
import { StyledTask,Title,Bottom, Assignees, AssigneeAvatar, TaskLink } from './Styles'
import TaskTypeIcon from 'components/TaskTypeIcon'
import TaskPriorityIcon from 'components/TaskPriorityIcon'
import { Draggable } from 'react-beautiful-dnd';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchTaskDetailAction } from 'redux/action/taskAction';


export default function Task({task,index}) {


  const {pathname} = useLocation()
  const dispatch=useDispatch()

  return (
 
    <Draggable key={index}  draggableId={task.taskId.toString()}   index={index}>
    {(provided, snapshot) => (
      <TaskLink
      to={`${pathname}/task/${task.taskId}`}
      ref={provided.innerRef} 
      onClick={()=>{  dispatch(fetchTaskDetailAction(Number(task.taskId)))}}
      {...provided.draggableProps}
      {...provided.dragHandleProps}

      >
          <StyledTask 
            isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}
            
            >

            <Title>{task.taskName}</Title> 
              <Bottom>
                   <div>
                     <TaskTypeIcon type={task.taskTypeDetail.id} size={20} />
                     <TaskPriorityIcon type={task.priorityTask.priorityId}  top={-1} left={4} />
                   </div>
                   <Assignees>
                     {task.assigness.slice(0,3).map(user => (
                       <AssigneeAvatar
                         key={user.id}
                         size={24}
                         avatarUrl={user.avatar}
                       
                       />
                     ))}
                     {task.assigness.length >3 &&
                       <AssigneeAvatar  size={24}>
                         +{task.assigness.length-3}
                       </AssigneeAvatar>
                     }
                   </Assignees>
                 </Bottom>
         </StyledTask>
      </TaskLink>        
    )}
  </Draggable>
  
      
  

  )
}
