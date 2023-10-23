import React from 'react'
import { Comments, Title } from './Styles'
import Create from './Create'
import Comment from './Comment'

export default function TaskDetailComments({ taskDetail }) {

    return (

        <Comments>
            <Title>Comments</Title>
            <Create taskId={taskDetail.taskId} />
            {taskDetail.lstComment && taskDetail.lstComment.slice().reverse().map(comment => (
                <Comment key={comment.id} comment={comment} taskId={taskDetail.taskId} />
            ))}
        </Comments>
    )
}
