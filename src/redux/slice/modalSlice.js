import { createSlice } from "@reduxjs/toolkit";



export const modalSlice = createSlice({

    name: 'modal',
    initialState: {
        taskCreateModal: false,
        taskSearchModal: false,
        updateModal: false,
        timeTrackingModal: false,
        deleteCommentModal:false,
        deleteTaskModal:false
    },
    reducers: {

        ACTION_TASK_CREATE_MODAL: (state, action) => {
            state.taskCreateModal = action.payload

        },
        ACTION_TASK_SEARCH_MODAL: (state, action) => {
            state.taskSearchModal = action.payload

        },
        ACTION_UPDATE_MODAL: (state, action) => {
            state.updateModal = action.payload

        },
        ACTION_TIME_TRACKING_MODAL: (state, action) => {
            state.timeTrackingModal = action.payload

        },
        ACTION_DELETE_COMMENT_MODAL: (state, action) => {
            state.deleteCommentModal = action.payload

        },
        ACTION_DELETE_TASK_MODAL:(state,action)=>{
            state.deleteTaskModal = action.payload
        }

    }

})

export const {
    ACTION_TASK_CREATE_MODAL,
    ACTION_TASK_SEARCH_MODAL,
    ACTION_UPDATE_MODAL,
    ACTION_TIME_TRACKING_MODAL,
    ACTION_DELETE_COMMENT_MODAL,
    ACTION_DELETE_TASK_MODAL
} = modalSlice.actions
export default modalSlice.reducer
