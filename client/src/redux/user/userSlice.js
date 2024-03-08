import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isLoading: false,
    error: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state)=>{
            state.isLoading = true,
            state.error = false
        },
        signInSuccess: (state, action)=>{
            state.isLoading = false,
            state.currentUser = action.payload,
            state.error = false
        },
        siginFailure: (state, action)=>{
            state.isLoading = false,
            state.error = action.payload
        }
    }

})

export const {siginFailure, signInStart, signInSuccess} = userSlice.actions
export default userSlice.reducer