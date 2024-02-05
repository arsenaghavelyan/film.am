import { createSlice } from "@reduxjs/toolkit";

const popularSlice = createSlice({
    name: "popularSlice",
    initialState: {
        value: []
    },
    reducers: {
        handlePopular(state, { payload }){
            state.value = payload.popular
        }
    }
})

export default popularSlice.reducer
export const {handlePopular} = popularSlice.actions
export const selectPopular = ((state) => state.popularSlice.value)