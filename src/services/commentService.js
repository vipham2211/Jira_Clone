
const CommentService = (axiosInstance,DOMAIN) => ({
    
   insertComment:(requestData)=>{
    return axiosInstance.post(`${DOMAIN}/Comment/insertComment`,requestData)
   },
   deleteComment:(commentId)=>{
      return axiosInstance.delete(`${DOMAIN}/Comment/deleteComment?idComment=${commentId}`)
   },
   updateComment:(requestData)=>{
      return axiosInstance.put(`${DOMAIN}/Comment/updateComment?id=${requestData.id}&contentComment=${requestData.contentComment}`)
   }
  });
  
  export default CommentService;