import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrlCategort = 'https://dummyjson.com/products/categories'
export const fetchCategories = createAsyncThunk("categoriesSlice/fetchCategories", async()=>{
    const result = await fetch(apiUrlCategort);
    const data = await result.json();
    console.log(data, "data rerturn");
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