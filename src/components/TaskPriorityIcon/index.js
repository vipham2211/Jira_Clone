import React from 'react'
import { PriorityIcon } from './Styles'
import { taskPriority } from 'utils/Styles'

export default function TaskPriorityIcon({type, ...otherProps}) {

  const iconType = taskPriority[type.toString()] === 'High' || taskPriority[type.toString()] === 'Medium' ? 'arrow-up':'arrow-down'

  return (
    <PriorityIcon type={iconType} color={taskPriority[type.toString()]} size={18} {...otherProps}/>
  )
}
