const TaskService = (axiosInstance,DOMAIN) => ({
    fetchTaskType:()=>{
        return axiosInstance.get(`${DOMAIN}/TaskType/getAll`)
      },
    fetchPriority:()=>{
        return axiosInstance.get(`${DOMAIN}/Priority/getAll?id=0`)
    },
    fetchStatus:()=>{
      return axiosInstance.get(`${DOMAIN}/Status/getAll`)
    },
    createTask:(task)=>{
      return axiosInstance.post(`${DOMAIN}/Project/createTask`,task)
    },
    updateStatus:(requestData)=>{
      return axiosInstance.put(`${DOMAIN}/Project/updateStatus`,requestData)
    },
    fetchTaskDetail:(taskId)=>{
      return axiosInstance.get(`${DOMAIN}/Project/getTaskDetail?taskId=${taskId}`)
    },
    updateTaskDetail:(requestData)=>{
      return axiosInstance.post(`${DOMAIN}/Project/updateTask`,requestData)
    },
    
  
  });
  
  export default TaskService;