import { DELETE_COMMENT_API } from "constants";
import { FETCH_TASK_DETAIL_API } from "constants";
import { DELETE_COMMENT_MODAL } from "constants";
import { toast } from "react-toastify";
import { call, delay, put,  takeLatest } from "redux-saga/effects";
import { ACTION_LOADING_SPINNER } from "redux/slice/spinnerSlice";


import { rootService } from "services";




function* deleteComment(action){

    yield put(ACTION_LOADING_SPINNER(true));
    yield delay(500)
    try{
        const {  status } = yield call(rootService.comment.deleteComment, action.data);

        if(status===200){
             
             yield put({
                type:FETCH_TASK_DETAIL_API,
                data:action.taskId
             })
            yield put({
                type:DELETE_COMMENT_MODAL,
                data:false
            }) 
            yield put(ACTION_LOADING_SPINNER(false));
            
        }
    }catch(err){
        toast.error(`${err.response.data.message} !`, {
            position: "top-right",
            autoClose: 3000,
            })
    }
}



export function* watchCommentSaga() {
 
   
    yield takeLatest(DELETE_COMMENT_API, deleteComment)
    
}