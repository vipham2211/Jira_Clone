import React from 'react'
import { TypeIcon } from './Styles'
import { taskType } from 'utils/Styles'

export default function IssueTypeIcon(props) {
   
    
  return (
    <TypeIcon type={taskType[props.type.toString()] } size={props.size} color={taskType[props.type.toString()]} top={props.top} />
  )
}
