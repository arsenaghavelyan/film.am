import { configureStore } from "@reduxjs/toolkit";
import popularSlice from './slices/popular'
import searchSlice from './slices/search'
import filmIDslice from './slices/filmID'
import mode from './slices/mode'

const store = configureStore({
    reducer:{
        popularSlice,
        searchSlice,
        filmIDslice,
        mode
    }
})
export default store