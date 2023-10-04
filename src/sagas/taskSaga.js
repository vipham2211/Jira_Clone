import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { ACTION_FETCH_PRIORITY, ACTION_FETCH_STATUS, ACTION_FETCH_TASK_DETAIL, ACTION_FETCH_TASK_TYPE } from 'redux/slice/taskSlice';
import { rootService } from 'services';
import { FETCH_TASK_TYPE_API } from 'constants';
import { FETCH_PRIORITY_API } from 'constants';
import { FETCH_STATUS_API } from 'constants';
import { toast } from 'react-toastify';
import { CREATE_TASK_API } from 'constants';
import { ACTION_LOADING_SPINNER } from 'redux/slice/spinnerSlice';
import { UPDATE_STATUS_API } from 'constants';
import { FETCH_TASK_DETAIL_API } from 'constants';
import { UPDATE_TASK_DETAIL_API } from 'constants';
import { FETCH_PROJECT_DETAIL_API } from 'constants';
import { ACTION_TASK_CREATE_MODAL } from 'redux/slice/modalSlice';





function* fetchTaskType() {
    try {
        const { data, status } = yield call(rootService.task.fetchTaskType);
        if (status === 200) {
            yield put(ACTION_FETCH_TASK_TYPE(data.content));
        }
    } catch (err) {
        console.log(err)
    }
}

function* fetchPriority() {
    try {
        const { data, status } = yield call(rootService.task.fetchPriority);
        if (status === 200) {
            yield put(ACTION_FETCH_PRIORITY(data.content));
        }
    } catch (err) {

    }
}
function* fetchStatus() {
    try {
        const { data, status } = yield call(rootService.task.fetchStatus)
        if (status === 200) {
            yield put(ACTION_FETCH_STATUS(data.content));
        }
    } catch (err) {

    }
}

function* createTask(action) {
    yield put(ACTION_LOADING_SPINNER(true));
    yield delay(500)
    try {
        const { status, data } = yield call(rootService.task.createTask, action.data)
        if (status === 200) {


            yield put(ACTION_LOADING_SPINNER(false));
            yield put(ACTION_TASK_CREATE_MODAL(false))
            toast.success('Create Task Success !', {
                position: "top-right",
                autoClose: 3000,
            });

            yield put({
                type: FETCH_PROJECT_DETAIL_API,
                data: data.content.projectId
            });
        }
    } catch (err) {
        yield put(ACTION_LOADING_SPINNER(false));
       
         toast.error(`${err.response.data.message} !`, {
            position: "top-right",
            autoClose: 3000,
        })
    }
}
function* updateStatus(action) {
    try {
        yield call(rootService.task.updateStatus, action.data)

    } catch (err) {
        toast.error(`${err.response.data.message} !`, {
            position: "top-right",
            autoClose: 3000,
        })
    }
}

function* fetchTaskDetail(action) {
    try {
        const { data, status } = yield call(rootService.task.fetchTaskDetail, action.data)
        if (status === 200) {
            yield put(ACTION_FETCH_TASK_DETAIL(data.content))
        }
    } catch (err) {
        console.log(err)
    }
}

function* updateTaskDetail(action) {

    try {
        const { status } = yield call(rootService.task.updateTaskDetail, action.data)
        if (status === 200) {

            yield put({
                type: FETCH_TASK_DETAIL_API,
                data: action.data.taskId
            })
            yield put({
                type: FETCH_PROJECT_DETAIL_API,
                data: action.data.projectId
            })

        }
    } catch (err) {

        toast.error(`${err.response.data.message} !`, {
            position: "top-right",
            autoClose: 3000,
        })
    }
}



export function* watchTaskSaga() {
    yield takeLatest(FETCH_TASK_TYPE_API, fetchTaskType)
    yield takeLatest(FETCH_PRIORITY_API, fetchPriority)
    yield takeLatest(FETCH_STATUS_API, fetchStatus)
    yield takeLatest(CREATE_TASK_API, createTask)
    yield takeLatest(UPDATE_STATUS_API, updateStatus)
    yield takeLatest(FETCH_TASK_DETAIL_API, fetchTaskDetail)
    yield takeLatest(UPDATE_TASK_DETAIL_API, updateTaskDetail)
    

}