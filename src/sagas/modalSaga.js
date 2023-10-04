import { TASK_SEARCH_MODAL } from "constants";
import { UPDATE_MODAL } from "constants";
import { DELETE_COMMENT_MODAL } from "constants";
import { DELETE_TASK_MODAL } from "constants";
import { TIME_TRACKING_MODAL } from "constants";
import { TASK_CREATE_MODAL } from "constants";
import { put, takeLatest } from "redux-saga/effects";
import {  ACTION_DELETE_COMMENT_MODAL, ACTION_DELETE_TASK_MODAL, ACTION_TASK_CREATE_MODAL, ACTION_TASK_SEARCH_MODAL, ACTION_TIME_TRACKING_MODAL, ACTION_UPDATE_MODAL } from "redux/slice/modalSlice";


function* taskCreateModal(action){
    
    yield put(ACTION_TASK_CREATE_MODAL(action.data))
}
function* taskSearchModal(action){
    
    yield put(ACTION_TASK_SEARCH_MODAL(action.data))
}
function* updateModal(action){
    
    yield put(ACTION_UPDATE_MODAL(action.data))
}
function* timeTrackingModal(action){
    
    yield put(ACTION_TIME_TRACKING_MODAL(action.data))
}
function* deleteCommentModal(action){
    
    yield put(ACTION_DELETE_COMMENT_MODAL(action.data))
}
function* deleteTaskModal(action){
    
    yield put(ACTION_DELETE_TASK_MODAL(action.data))
}

export function* watchModalSaga() {
    yield takeLatest(TASK_CREATE_MODAL, taskCreateModal)
    yield takeLatest(TASK_SEARCH_MODAL, taskSearchModal)
    yield takeLatest(UPDATE_MODAL, updateModal)
    yield takeLatest(TIME_TRACKING_MODAL, timeTrackingModal)
    yield takeLatest(DELETE_COMMENT_MODAL, deleteCommentModal)
    yield takeLatest(DELETE_TASK_MODAL, deleteTaskModal)
}