import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product-slices"
import categoriesReducer from "./slices/categories-slices"

export const store = configureStore({
    reducer : {
        products : productReducer,
        categories : categoriesReducer
    }
})