import React from 'react'
import { StyledRemoveMember } from './Styles'
import Button from 'components/Button'
import Avatar from 'components/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { removeUserFromProjectAction } from 'redux/action/projectAction'

export default function RemoveMember({member,projectId}) {
  
    const dispatch=useDispatch()
    const isSpinnerLoading = useSelector((state)=> state.spinner.isSpinnerLoading)

const handleRemoveMember=()=>{
    const requestData = {
        projectId,
        userId: member.userId
      };
      dispatch(removeUserFromProjectAction(requestData))
}

const renderMember = () =>{    
            return (
                <tr key={member.userId}>
                <td>{member.name}</td>
                <td><Avatar avatarUrl={member.avatar} size={25}/> </td>
                <td><Button icon='close' type='button' variant='danger' size='sm' iconSize={16} onClick={handleRemoveMember} isLoading={isSpinnerLoading} /> </td>
                </tr>
            )       
}

  return (
    <StyledRemoveMember>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Avatar</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
               
            {renderMember()}
             
            </tbody>
       
    </StyledRemoveMember>
  )
}
