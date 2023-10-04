import { FETCH_USERS_BY_PROJECT_ID_API} from "constants";
import { USER_LOGIN_API } from "constants";
import { FETCH_USER_API } from "constants";


export const fetchUserAction = (keyword) =>{
    return {
        type:FETCH_USER_API,
        data:keyword
    }
}

export const userLoginAction = (requestData)=>{
  return {
    type:USER_LOGIN_API,
    data:requestData,
   
    }
}
  
export const fetchUserByProjectIdAction = (projectId) =>{
    return {
        type:FETCH_USERS_BY_PROJECT_ID_API,
        data:projectId
    }
}
