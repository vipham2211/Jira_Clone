import Textarea from 'components/Textarea'
import React, { Fragment, useRef } from 'react'
import { Actions, FormButton } from './Styles';


export default function TaskDetailsCommentsBodyForm({ onChange,isLoading,defaultValue, onSubmit,  onCancel }) {

   

    const $textareaRef = useRef();
  
    const handleSubmit = () => {
        if ($textareaRef.current.value.trim()) {
          onSubmit();
          
        }
      };
    return (
        <Fragment>
            <Textarea
                autoFocus
                minRows={2}
                placeholder="Add a comment..."
                onChange={onChange}
                defaultValue={defaultValue}
                ref={$textareaRef}
            />
            <Actions>
                <FormButton variant="primary" isLoading={isLoading} onClick={handleSubmit}>
                    Save
                </FormButton>
                <FormButton variant="empty" onClick={onCancel}>
                    Cancel
                </FormButton>
            </Actions>
        </Fragment>
    )

}
