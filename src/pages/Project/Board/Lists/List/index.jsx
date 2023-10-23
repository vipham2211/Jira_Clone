import React from 'react'
import { StyledList, Title, Tasks, IssuesCount } from './Styles'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd';

export default function List({ status }) {


  return (
 
      <Droppable key={Number(status.statusId)}   droppableId={status.statusId}>
      {provided => (
        <StyledList>
          <Title> {status.statusName}
          <IssuesCount> {status.lstTaskDeTail.length} </IssuesCount>
          
           </Title>
          <Tasks
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            { status.lstTaskDeTail.map((item, index) => {
                return (
                  <Task
                    key={item.taskId}
                    task={item}
                    index={index}
                  />
                )
              })}
            {provided.placeholder}
          </Tasks>
         
        </StyledList>
      )}
    </Droppable>
    
    

  )
}
