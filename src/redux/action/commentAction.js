import { DELETE_COMMENT_API } from "constants"

export const deleteCommentAction = (taskId, commentId) => {
  return {
    type: DELETE_COMMENT_API,
    data: commentId,
    taskId
  }
}

