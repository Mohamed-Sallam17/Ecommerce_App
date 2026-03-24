import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrlCategory = 'https://dummyjson.com/products/categories'
export const fetchCategories = createAsyncThunk("categoriesSlice/fetchCategories", async()=>{
    const result = await fetch(apiUrlCategory);
    const data = await result.json();
    return data ; 
})

export const categoriesSlice = createSlice({
    name : "categoriesSlice",
    initialState : [],
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchCategories.fulfilled, (state,action)=>{
            return action.payload
        })
    }
})

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer