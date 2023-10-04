import { all } from "redux-saga/effects";
import { watchTaskSaga } from "./taskSaga";
import { watchUserSaga } from "./userSaga";
import { watchProjectSaga } from "./projectSaga";
import { watchCommentSaga } from "./commentSaga";
import { watchModalSaga } from "./modalSaga";
import { watchSpinnerSaga } from "./spinnerSaga";



function* rootSaga() {
    yield all([
        watchUserSaga(),
        watchTaskSaga(),
        watchProjectSaga(),
        watchCommentSaga(),
        watchModalSaga(),
        watchSpinnerSaga()
      ])
  }

  export default rootSaga;