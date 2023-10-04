import { createSlice } from "@reduxjs/toolkit";



export const taskSlice = createSlice({

    name:'task',
    initialState:{
        arrTaskType:[],
        arrPriority:[],
        arrStatus:[],
        arrTaskDetail:[]
        
    },
    reducers:{
       
        ACTION_FETCH_TASK_TYPE:(state,action)=>{
            state.arrTaskType = action.payload
           
        },
        ACTION_FETCH_PRIORITY:(state,action) => {
            state.arrPriority = action.payload
        },
        ACTION_FETCH_STATUS:(state,action)=>{
            state.arrStatus=action.payload
            
        },
        ACTION_FETCH_TASK_DETAIL:(state,action)=>{
            state.arrTaskDetail = action.payload
            
        }


    }

})

export const { ACTION_FETCH_TASK_TYPE, ACTION_FETCH_PRIORITY, ACTION_FETCH_STATUS,ACTION_FETCH_TASK_DETAIL} = taskSlice.actions
export default taskSlice.reducer
