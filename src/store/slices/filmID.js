import { createSlice } from "@reduxjs/toolkit";

const filmIDslice = createSlice({
    name:"filmID",
    initialState:{
        value:JSON.parse(localStorage.getItem("Id")) || []
    },
    reducers:{
        handleFilmID(state, { payload }){
            state.value = payload.id
            localStorage.setItem("Id", JSON.stringify(state.value))
        }
    }
})

export const selectFilmID = ((state) => state.filmIDslice.value)
export const {handleFilmID} = filmIDslice.actions 
export default filmIDslice.reducer