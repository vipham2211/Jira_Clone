import React, { Fragment, useEffect, useState } from 'react'
import { Actions, EmptyLabel, Title } from './Styles'
import TextEditor from 'components/TextEditor'
import Button from 'components/Button'
import TextEditedContent from 'components/TextEditedContent'

export default function TaskDetailDescription({ taskDetail, updateField }) {

    const [description, setDescription] = useState(taskDetail.description);
    const [isEditing, setEditing] = useState(false);
    
    useEffect(()=>{
            setDescription(taskDetail.description)
    },[taskDetail.description])

    const handleUpdate = () => {
        setEditing(false);
        updateField('description',description)
    };
    const getTextContentsFromHtmlString = html => {
        const el = document.createElement('div');
        el.innerHTML = html;
        return el.textContent;
    };
    const isDescriptionEmpty = getTextContentsFromHtmlString(description).trim().length === 0;

    return (
        <Fragment>
            <Title>Description</Title>
            {isEditing ? (
                <Fragment>
                    <TextEditor
                      
                        placeholder="Describe the issue"
                        value={description}
                        onChange={setDescription}
                    />
                    <Actions>
                        <Button variant="primary" onClick={handleUpdate}>
                            Save
                        </Button>
                        <Button variant="empty" onClick={() => setEditing(false)}>
                            Cancel
                        </Button>
                    </Actions>
                </Fragment>
            ) : (
                <Fragment>
                    {isDescriptionEmpty ? (
                        <EmptyLabel onClick={() => setEditing(true)}>Add a description...</EmptyLabel>
                    ) : (
                        <TextEditedContent content={description} onClick={() => setEditing(true)} />
                    )}
                </Fragment>
            )}
        </Fragment>
    )
}
