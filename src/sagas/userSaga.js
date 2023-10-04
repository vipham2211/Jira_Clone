import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { ACTION_FETCH_ALL_USER, ACTION_USER_BY_PROJECT_ID, ACTION_USER_LOGIN } from 'redux/slice/userSlice';
import { rootService } from 'services';
import { FETCH_USER_API,FETCH_USERS_BY_PROJECT_ID_API,USER_LOGIN_API } from 'constants';
import { toast } from 'react-toastify';

import { ACTION_LOADING_PAGE } from 'redux/slice/spinnerSlice';







function* fetchAllUser(action) {

    yield put(ACTION_LOADING_PAGE(true))
    yield delay(500)
    try {   
        const { data, status } = yield call(rootService.user.fetchAllUser, action.data);
        if (status === 200) {
            yield put(ACTION_FETCH_ALL_USER(data.content));
            yield put(ACTION_LOADING_PAGE(false))
        }
    } catch (err) {
        toast.error(`${err.response.data.message} !`, {
            position: "top-right",
            autoClose: 3000,
            })
    }
}

function* userLogin(action){
    yield put(ACTION_LOADING_PAGE(true));
    yield delay(500)
    try{
        const { data, status } = yield call(rootService.user.userLogin, action.data);
        if(status===200){
        
            localStorage.setItem('TOKEN',data.content.accessToken)
            localStorage.setItem('userLogin',JSON.stringify(data.content))
            yield put(ACTION_USER_LOGIN(data.content))
            yield put(ACTION_LOADING_PAGE(false));
           
        }
    }
    catch(err){
        toast.error(`${err.response.data.message} !`, {
            position: "top-right",
            autoClose: 3000,
            })
    }
}

function* fetchUsersByProjectId(action){
    try{

        const {data,status} = yield call(rootService.user.userByProjectId,action.data);
        if(status ===200){
                yield put(ACTION_USER_BY_PROJECT_ID(data.content))
        }
       
    }catch(err){
        toast.error(`${err.response.data.message} !`, {
            position: "top-right",
            autoClose: 3000,
            })
            yield put(ACTION_USER_BY_PROJECT_ID([]))
    }
}

export function* watchUserSaga() {
    yield takeLatest(FETCH_USER_API, fetchAllUser)
    yield takeLatest(USER_LOGIN_API, userLogin)
    yield takeLatest(FETCH_USERS_BY_PROJECT_ID_API,fetchUsersByProjectId)
}