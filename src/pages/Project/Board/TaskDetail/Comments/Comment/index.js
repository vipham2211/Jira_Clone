import React, { Fragment, useState } from 'react'
import { Body, Comment, Content, DeleteLink, EditLink, UserAvatar, Username } from './Styles'
import BodyForm from '../BodyForm';
import ConfirmModal from 'components/ConfirmModal';
import { useDispatch } from 'react-redux';
import { deleteCommentAction } from 'redux/action/commentAction';
import { useSelector } from 'react-redux';
import {  deleteCommentModalAction } from 'redux/action/modalAction';
import { DOMAIN } from 'constants/settingSystem';
import { toast } from 'react-toastify';
import axios from 'axios';

import { fetchTaskDetailAction } from 'redux/action/taskAction';

export default function TaskDetailsComment ({comment,taskId}) {

    const dispatch=useDispatch()

    const [isFormOpen, setFormOpen] = useState(false);
    const deleteCommentModal = useSelector(state => state.modal.deleteCommentModal)
    const isSpinnerLoading = useSelector((state) => state.spinner.isSpinnerLoading)
    const [isLoading,setIsLoading] = useState(false)
    const [body, setBody] = useState(comment.commentContent);


    
const handleCommentDelete = ()=>{
    dispatch(deleteCommentAction(taskId,comment.id))
   
}

const handleClickComment= ()=>{
  setFormOpen(true)
    
}


const handleCommentUpdate = async () => {
  setIsLoading(true)

  setTimeout(async function() { 
    try {
      const token = localStorage.getItem('TOKEN');
      const reqInstance = axios.create({
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
     
      const { status } = await reqInstance.put(`${DOMAIN}/Comment/updateComment?id=${comment.id}&contentComment=${body}`)
  
      if (status === 200) {
     
         dispatch(fetchTaskDetailAction(taskId));
         setFormOpen(false)
         setIsLoading(false)
      }
     
    } catch (err) {
      toast.error(`${err.response.data.message} !`, {
        position: "top-right",
        autoClose: 3000,
      })
      setIsLoading(false)
    }
  }, 500); 
};

  return (

    <Comment data-testid="issue-comment">
    <UserAvatar size={32} name={comment.name} avatarUrl={comment.avatar} />
    <Content>
      <Username>{comment.name}</Username>

      {isFormOpen ? (
        <BodyForm
          value={body}
          defaultValue={comment.commentContent}
          onChange={setBody}
          onSubmit={handleCommentUpdate}
          onCancel={() => setFormOpen(false)}
          isLoading={isLoading}
        />
      ) : (
        <Fragment>
          <Body>{comment.commentContent}</Body>
          <EditLink onClick={handleClickComment}>Edit</EditLink>
          
       {deleteCommentModal && 
       <ConfirmModal
       title="Are you sure you want to delete this comment?"
       message="Once you delete, it's gone for good."
       confirmText="Delete comment"
       onConfirm={handleCommentDelete}
       setIsOpen={deleteCommentModalAction}
       isLoading={isSpinnerLoading}
     />}   
          <DeleteLink onClick={()=> dispatch(deleteCommentModalAction(true))}>Delete</DeleteLink>
        </Fragment>
      )}
    </Content>
  </Comment>
  )
}
