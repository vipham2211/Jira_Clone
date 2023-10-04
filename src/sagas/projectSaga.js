import { DELETE_PROJECT_API } from "constants";
import { REMOVE_USER_FROM_PROJECT_API } from "constants";
import { FETCH_CATEGORY_PROJECT_API } from "constants";
import { ASSIGN_USER_FORM_PROJECT_API } from "constants";
import { UPDATE_PROJECT_API } from "constants";
import { FETCH_PROJECT_DETAIL_API } from "constants";
import { CREATE_PROJECT_API } from "constants";
import { FETCH_ALL_PROJECT_API } from "constants";
import { toast } from "react-toastify";
import { put, call, takeLatest, delay } from "redux-saga/effects";
import { ACTION_UPDATE_MODAL } from "redux/slice/modalSlice";
import {
  ACTION_FETCH_ALL_PROJECT,
  ACTION_FETCH_CATEGORY_PROJECT,
  ACTION_FETCH_PROJECT_DETAIL,
} from "redux/slice/projectSlice";
import { ACTION_LOADING_SPINNER } from "redux/slice/spinnerSlice";
import { rootService } from "services";

function* fetchAllProject(action) {
  try {
    const { data, status } = yield call(
      rootService.project.fetchAllProject,
      action.data
    );
    if (status === 200) {
      yield put(ACTION_FETCH_ALL_PROJECT(data.content));
    }
  } catch (err) {
    console.log(err);
  }
}
function* fetchCategoryProject(action) {
  try {
    const { data, status } = yield call(
      rootService.project.fetchCategoryProject,
      action.data
    );
    if (status === 200) {
      yield put(ACTION_FETCH_CATEGORY_PROJECT(data.content));
    }
  } catch (err) {
    console.log(err);
  }
}

function* removeUserFromProject(action) {
  yield put(ACTION_LOADING_SPINNER(true));
  yield delay(500);
  try {
    const { status } = yield call(
      rootService.project.removeUserFromProject,
      action.data
    );
    if (status === 200) {
      toast.success("Remove User Success !", {
        position: "top-right",
        autoClose: 3000,
      });
      yield put({ type: FETCH_ALL_PROJECT_API });
      yield put(ACTION_LOADING_SPINNER(false));
    }
  } catch (err) {
    console.log(err);

    toast.error(`${err.response.data.message} !`, {
      position: "top-right",
      autoClose: 3000,
    });
    yield put(ACTION_LOADING_SPINNER(false));
  }
}
function* assignUserFromProject(action) {
  try {
    const { status } = yield call(
      rootService.project.assignUserFromProject,
      action.data
    );
    if (status === 200) {
      toast.success("Assign User Success !", {
        position: "top-right",
        autoClose: 3000,
      });
      yield put({ type: FETCH_ALL_PROJECT_API });
    }
  } catch (err) {
    toast.error(`${err.response.data.message} !`, {
      position: "top-right",
      autoClose: 3000,
    });
  }
}

function* updateProject(action) {
  yield put(ACTION_LOADING_SPINNER(true));
  yield delay(500);
  try {
    const { status } = yield call(
      rootService.project.updateProject,
      action.data
    );
    if (status === 200) {
      yield put(ACTION_LOADING_SPINNER(false));
      yield put(ACTION_UPDATE_MODAL(false));
      toast.success("Update Success !", {
        position: "top-left",
        autoClose: 3000,
      });
      yield put({ type: FETCH_ALL_PROJECT_API });
    }
  } catch (err) {
    console.log(err);
    toast.error(`${err.response.data.message} !`, {
      position: "top-left",
      autoClose: 3000,
    });
    yield put(ACTION_LOADING_SPINNER(false));
  }
}

function* createProject(action) {
  yield put(ACTION_LOADING_SPINNER(true));
  yield delay(500);
  try {
    const { status } = yield call(
      rootService.project.createProject,
      action.data
    );
    if (status === 200) {
      toast.success("Create Project Success !", {
        position: "top-right",
        autoClose: 3000,
      });
      yield put({ type: FETCH_ALL_PROJECT_API });
      yield put(ACTION_LOADING_SPINNER(false));
    }
  } catch (err) {
    toast.error(`${err.response.data.message} !`, {
      position: "top-right",
      autoClose: 3000,
    });
    yield put(ACTION_LOADING_SPINNER(false));
  }
}

function* deleteProject(action) {
  yield put(ACTION_LOADING_SPINNER(true));
  yield delay(500);
  try {
    const { status } = yield call(
      rootService.project.deleteProject,
      action.data
    );
    if (status === 200) {
      toast.success("Delete Project Success !", {
        position: "top-right",
        autoClose: 3000,
      });
      yield put({ type: FETCH_ALL_PROJECT_API });
      yield put(ACTION_LOADING_SPINNER(false));
    }
  } catch (err) {
    toast.error(`${err.response.data.message} !`, {
      position: "top-right",
      autoClose: 3000,
    });
    yield put(ACTION_LOADING_SPINNER(false));
  }
}
function* fetchProjectDetail(action) {
  try {
    const { status, data } = yield call(
      rootService.project.getProjectDetail,
      action.data
    );
    if (status === 200) {
      yield put(ACTION_FETCH_PROJECT_DETAIL(data.content));
      localStorage.setItem("listTask", JSON.stringify(data.content.lstTask));
    }
  } catch (err) {}
}

export function* watchProjectSaga() {
  yield takeLatest(FETCH_ALL_PROJECT_API, fetchAllProject);
  yield takeLatest(FETCH_CATEGORY_PROJECT_API, fetchCategoryProject);
  yield takeLatest(REMOVE_USER_FROM_PROJECT_API, removeUserFromProject);
  yield takeLatest(ASSIGN_USER_FORM_PROJECT_API, assignUserFromProject);
  yield takeLatest(CREATE_PROJECT_API, createProject);
  yield takeLatest(DELETE_PROJECT_API, deleteProject);
  yield takeLatest(UPDATE_PROJECT_API, updateProject);
  yield takeLatest(FETCH_PROJECT_DETAIL_API, fetchProjectDetail);
}
