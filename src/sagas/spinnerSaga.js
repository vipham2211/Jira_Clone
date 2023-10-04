import { LOADING_SPINNER } from "constants";
const { put, takeLatest } = require("redux-saga/effects");
const { ACTION_LOADING_SPINNER } = require("redux/slice/spinnerSlice");

function* loadingSpinner(action){
   
    yield put(ACTION_LOADING_SPINNER(action.data))
}

export function* watchSpinnerSaga() {
    yield takeLatest(LOADING_SPINNER, loadingSpinner)
  
}