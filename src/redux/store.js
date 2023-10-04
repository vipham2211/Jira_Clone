import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import userReducer from './slice/userSlice'
import taskReducer from './slice/taskSlice'
import projectReducer from './slice/projectSlice'
import spinnerReducer from './slice/spinnerSlice'
import modalReducer from './slice/modalSlice'
import rootSaga from 'sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        user:userReducer,
        task:taskReducer,
        project:projectReducer,
        spinner:spinnerReducer,
        modal:modalReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  })

  sagaMiddleware.run(rootSaga)