import { createSlice } from "@reduxjs/toolkit";

const mode = createSlice({
    name:"mode",
    initialState:{
        value:JSON.parse(localStorage.getItem("Mode")) || false
    },
    reducers:{
        handleMode(state, { payload }){
            state.value = payload.boolean
            localStorage.setItem("Mode", JSON.stringify(state.value))
        }
    }
})

export const selectMode = ((state) => state.mode.value)
export const {handleMode} = mode.actions 
export default mode.reducer