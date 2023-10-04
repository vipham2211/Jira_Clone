import React from 'react'
import { StyledDeleteProject } from './Styles'
import Button from 'components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProjectAction } from 'redux/action/projectAction'

export default function DeleteProject({ projectId }) {

    const dispatch = useDispatch()
    const isSpinnerLoading = useSelector((state)=> state.spinner.isSpinnerLoading)

    const handleDeleteProject = ()=>{
     
        dispatch(deleteProjectAction(projectId))
    }

    return (
        <StyledDeleteProject>
            Are you sure ?
            <Button type='button' variant='primary' size='sm' isLoading={isSpinnerLoading} onClick={handleDeleteProject}>Yes</Button>
        </StyledDeleteProject>
    )
}
