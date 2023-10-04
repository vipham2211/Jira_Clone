import React from 'react'
import { Actions, Message, StyledButton, StyledConfirmModal, Title } from './Styles'
import Modal from 'components/Modal';
import { useDispatch } from 'react-redux';

export default function ConfirmModal(props) {

    const dispatch=useDispatch()

    const {
        title = 'Warning',
        variant = 'primary',
        message = 'Are you sure you want to continue with this action?',
        confirmText = 'Confirm',
        cancelText = 'Cancel',
        setIsOpen
    } = props

    return (
      
            <Modal
                isCloseIcon={false}
                onClose={setIsOpen}
                renderContent={() => (
                    <StyledConfirmModal>
                        <Title>{title}</Title>
                        {message && <Message>{message}</Message>}
                        <Actions>
                            <StyledButton
                                variant={variant}
                                onClick={() => props.onConfirm()}
                                isLoading={props.isLoading}
                            >
                                {confirmText}
                            </StyledButton>
                            <StyledButton onClick={() => dispatch(setIsOpen(false))} >
                                {cancelText}
                            </StyledButton>
                        </Actions>
                    </StyledConfirmModal>
                )}
            />
     


    )
}
