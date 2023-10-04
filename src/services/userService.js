const UserService = (axiosInstance,DOMAIN) => ({
    fetchAllUser:()=>{
        return axiosInstance.get(`${DOMAIN}/Users/getUser`)
      },
    userLogin:(requestData)=>{
        return axiosInstance.post(`${DOMAIN}/Users/signin`,requestData)
    },
    userByProjectId:(projectId)=>{
      return axiosInstance.get(`${DOMAIN}/Users/getUserByProjectId?idProject=${projectId}`)
    }
  });
  
  export default UserService;