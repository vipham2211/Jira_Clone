import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({

    name:'user',
    initialState:{
        userLogin:{},
        arrUsers:[],
        arrUsersByProjectId:[]
        
    },
    reducers:{
       
        ACTION_FETCH_ALL_USER:(state,action)=>{
            state.arrUsers = action.payload
            
        },
        ACTION_USER_LOGIN:(state,action)=>{
            state.userLogin = action.payload
         
        },
        ACTION_USER_BY_PROJECT_ID:(state,action)=>{
            state.arrUsersByProjectId = action.payload
        }

    }

})

export const {  ACTION_FETCH_ALL_USER,ACTION_USER_LOGIN,ACTION_USER_BY_PROJECT_ID} = userSlice.actions
export default userSlice.reducer
