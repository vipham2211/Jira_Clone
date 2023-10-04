import axios from "axios";
import { DOMAIN } from "constants/settingSystem";
import UserService from "./userService";
import TaskService from "./taskService";
import ProjectService from "./projectService";
import CommentService from "./commentService";



const   reqInstance = axios.create({
  headers: {}
    
})

reqInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('TOKEN');
   
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export const rootService = {
    user: UserService(reqInstance,DOMAIN),
    task:TaskService(reqInstance,DOMAIN),
    project:ProjectService(reqInstance,DOMAIN),
    comment:CommentService(reqInstance,DOMAIN)
}