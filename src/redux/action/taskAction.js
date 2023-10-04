import { CREATE_TASK_API } from "constants";
import { FETCH_TASK_DETAIL_API } from "constants";
import { UPDATE_TASK_DETAIL_API } from "constants";
import { UPDATE_STATUS_API } from "constants";
import { FETCH_STATUS_API } from "constants";
import { FETCH_PRIORITY_API,FETCH_TASK_TYPE_API } from "constants";




export const fetchTaskTypeAction = () =>{
    return {
        type:FETCH_TASK_TYPE_API,
        
    }
}
export const createTaskAction = (task) =>{
  return {
      type:CREATE_TASK_API,
      data:task
  }
}

export const fetchPriorityAction = () =>{
  return {
    type:FETCH_PRIORITY_API,
  }
}

export const fetchStatusAction = ()=>{
  return {
    type:FETCH_STATUS_API
  }
}
export const updateStatusAction = (requestData)=>{
  return {
    type:UPDATE_STATUS_API,
    data:requestData
  }
}

export const fetchTaskDetailAction = (taskId)=>{
  return{
    type:FETCH_TASK_DETAIL_API,
    data:taskId
  }
}

export const updateTaskDetailAction = (requestData)=>{
  return{
    type:UPDATE_TASK_DETAIL_API,
    data:requestData
  }
}



  
