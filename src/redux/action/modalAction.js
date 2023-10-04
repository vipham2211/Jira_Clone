import { UPDATE_MODAL } from "constants"
import { DELETE_COMMENT_MODAL } from "constants"
import { DELETE_TASK_MODAL } from "constants"
import { TIME_TRACKING_MODAL } from "constants"
import { TASK_SEARCH_MODAL } from "constants"
import { TASK_CREATE_MODAL } from "constants"



export const taskCreateModalAction = (action) =>{
    return {
        type:TASK_CREATE_MODAL,
        data:action
    }
}
export const taskSearchModalAction = (action) =>{
    return {
        type:TASK_SEARCH_MODAL,
        data:action
    }
}
export const updateModalAction = (action) =>{
    return {
        type:UPDATE_MODAL,
        data:action
    }
}
export const timeTrackingModalAction = (action) =>{
    return {
        type:TIME_TRACKING_MODAL,
        data:action
    }
}
export const deleteCommentModalAction = (action) =>{
    return {
        type:DELETE_COMMENT_MODAL,
        data:action
    }
}
export const deleteTaskModalAction = (action) =>{
    return {
        type:DELETE_TASK_MODAL,
        data:action
    }
}