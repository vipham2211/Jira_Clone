import Select from 'components/Select'
import React from 'react'
import { useSelector } from 'react-redux'
import {  StyledTaskDetailsType, TypeButton } from './Styles';
import { SelectItemLabel } from '../Styles';
import TaskTypeIcon from 'components/TaskTypeIcon';
import IssueTypeIcon from 'components/TaskTypeIcon';

export default function TaskDetailsType({taskDetail,updateField,genOptions,renderItem}) {
  
    const arrTaskType = useSelector((state) => state.task.arrTaskType)

   
   
      const renderItemValue = (items, itemKey, labelKey) => ({ value: id }) => {
        const item = items.find(item => item[itemKey] === id)
    
        if (item) {
         
          return (
          <TypeButton variant="empty" icon={<IssueTypeIcon type={item[itemKey]} />}>
            {`${item[labelKey]}-${taskDetail.taskId}`}
          </TypeButton>
          )
        }
      }
     
    const taskTypeOptions = genOptions(arrTaskType, 'id', 'taskType');
    const renderTypeOption = renderItem(arrTaskType, 'id', TaskTypeIcon, SelectItemLabel, 'taskType')
    const renderTypeValue = renderItemValue(arrTaskType, 'id', 'taskType')
  return (
      <StyledTaskDetailsType>
      <Select
          name="type"
          withClearValue={false}
          variant='empty'
          dropdownWidth={150}
          options={taskTypeOptions}
          value={taskDetail.typeId}
          onChange={value=> updateField('typeId',value)}
          renderOption={renderTypeOption}
          renderValue={renderTypeValue}
          />
      </StyledTaskDetailsType>
 
 

    
  )
}
