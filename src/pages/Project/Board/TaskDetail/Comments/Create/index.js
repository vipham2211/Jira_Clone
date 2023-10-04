import React, { Fragment, useState } from 'react'
import { Create, FakeTextarea, Right, UserAvatar } from './Styles'
import BodyForm from '../BodyForm';
import Protip from './Protip'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { DOMAIN } from 'constants/settingSystem';
import { toast } from 'react-toastify';
import { fetchTaskDetailAction } from 'redux/action/taskAction';


export default function TaskDetailCommentsCreate({ taskId }) {

    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const [isFormOpen, setFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [body, setBody] = useState('');

    const dispatch = useDispatch()

    const handleCommentCreate = async () => {
        setIsLoading(true)
        setTimeout(async function () { 
            try {
                const token = localStorage.getItem('TOKEN');
                const reqInstance = axios.create({
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const requestData = {
                    "taskId": taskId,
                    "contentComment": body
                }

                const { status } = await reqInstance.post(`${DOMAIN}/Comment/insertComment`, requestData)

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
    }
    return (
        <Create>
            {userLogin && <UserAvatar size={32} name={userLogin.name} avatarUrl={userLogin.avatar} />}
            <Right>
                {isFormOpen ? (
                    <BodyForm
                        value={body}
                        onChange={setBody}
                        onSubmit={handleCommentCreate}
                        onCancel={() => setFormOpen(false)}
                        isLoading={isLoading}
                    />
                ) : (
                    <Fragment>
                        <FakeTextarea onClick={() => setFormOpen(true)}>Add a comment...</FakeTextarea>
                        <Protip setFormOpen={setFormOpen} />
                    </Fragment>
                )}

            </Right>
        </Create>
    )
}
