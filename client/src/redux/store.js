import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './slice/bookSlice'

const store = configureStore({
    reducer: {
        books: booksReducer
    }
})

export default store