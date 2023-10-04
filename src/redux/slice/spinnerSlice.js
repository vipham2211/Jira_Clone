import { createSlice } from "@reduxjs/toolkit";



export const spinnerSlice = createSlice({

    name:'spinner',
    initialState:{
        isSpinnerLoading:false,
        loadingPage:false
        
    },
    reducers:{
       
        ACTION_LOADING_SPINNER:(state,action)=>{
            state.isSpinnerLoading = action.payload
           
        },
        ACTION_LOADING_PAGE:(state,action)=>{
            state.loadingPage = action.payload
        }
    }

})

export const { ACTION_LOADING_SPINNER, ACTION_LOADING_PAGE} = spinnerSlice.actions
export default spinnerSlice.reducer
