const projectService = (axiosInstance,DOMAIN) => ({

    fetchAllProject:()=>{
        return axiosInstance.get(`${DOMAIN}/Project/getAllProject`)
      },
    removeUserFromProject:(user)=>{
        return axiosInstance.post(`${DOMAIN}/Project/removeUserFromProject`,user)
    },
    assignUserFromProject:(user)=>{
      return axiosInstance.post(`${DOMAIN}/Project/assignUserProject`,user)
    },
    createProject:(project)=>{
      return axiosInstance.post(`${DOMAIN}/Project/createProjectAuthorize`,project)
    }
    ,
    deleteProject:(projectId)=>{
      return axiosInstance.delete(`${DOMAIN}/Project/deleteProject?projectId=${projectId}`)
    },
    fetchCategoryProject:()=>{
      return axiosInstance.get(`${DOMAIN}/ProjectCategory`)
    },
    updateProject:(project)=>{
      return axiosInstance.put(`${DOMAIN}/Project/updateProject?projectId=${project.id}`,project)
    },
    getProjectDetail:(projectId)=>{
      return axiosInstance.get(`${DOMAIN}/Project/getProjectDetail?id=${projectId}`)
    }
  });
  
  export default projectService;