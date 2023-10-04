import { createSlice } from "@reduxjs/toolkit";



export const projectSlice = createSlice({

    name:'project',
    initialState:{
        arrProject:[],
        arrCategoryProject:[] ,
        arrProjectDetail:[]
    },
    reducers:{
       
        ACTION_FETCH_ALL_PROJECT:(state,action)=>{
            state.arrProject = action.payload
           
        },
        ACTION_FETCH_CATEGORY_PROJECT:(state,action)=>{
            state.arrCategoryProject = action.payload
           
        },
        ACTION_FETCH_PROJECT_DETAIL:(state,action)=>{
            state.arrProjectDetail = action.payload
           
        }

    }

})

export const {  ACTION_FETCH_ALL_PROJECT,ACTION_FETCH_CATEGORY_PROJECT,ACTION_FETCH_PROJECT_DETAIL} = projectSlice.actions
export default projectSlice.reducer
