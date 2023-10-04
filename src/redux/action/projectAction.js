import { DELETE_PROJECT_API } from "constants"
import { UPDATE_PROJECT_API } from "constants"
import { CREATE_PROJECT_API } from "constants"
import { FETCH_PROJECT_DETAIL_API } from "constants"
import { ASSIGN_USER_FORM_PROJECT_API } from "constants"
import { FETCH_CATEGORY_PROJECT_API } from "constants"
import { REMOVE_USER_FROM_PROJECT_API } from "constants"
import { FETCH_ALL_PROJECT_API } from "constants"


export const fetchAllProjectAction = () =>{
    return {
        type:FETCH_ALL_PROJECT_API,
        
    }
}

export const removeUserFromProjectAction = (requestData)=>{
    return {
        type:REMOVE_USER_FROM_PROJECT_API,
        data:requestData
    }
}
export const assignUserFromProjectAction = (requestData)=>{
    return {
        type:ASSIGN_USER_FORM_PROJECT_API,
        data:requestData
    }
}
export const updateProjectAction = (project)=>{
    return {
        type:UPDATE_PROJECT_API,
        data:project,
        
    }
}
export const deleteProjectAction = (projectId)=>{
    return {
        type:DELETE_PROJECT_API,
        data:projectId
    }
}
export const createProjectAction = (project)=>{
    return {
        type:CREATE_PROJECT_API,
        data:project
    }
}
export const fetchCategoryProjectAction = () =>{
    return {
        type:FETCH_CATEGORY_PROJECT_API,
        
    }
}
export const fetchProjectDetailAction = (projectId) =>{
    return {
        type:FETCH_PROJECT_DETAIL_API,
        data:projectId
    }
}
