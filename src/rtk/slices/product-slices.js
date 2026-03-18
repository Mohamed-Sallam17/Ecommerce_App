import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = "https://dummyjson.com/products";
export const fetchProducts = createAsyncThunk('productSlice/fetchProducts', async()=>{
    const result = await fetch(apiUrl);
    const data = await result.json();
    console.log(data.products)
    return data.products;
})

export const productSlice = createSlice({
    name : "productSlice",
    initialState : [],
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            return action.payload;
        })
    }
})

export const {} = productSlice.actions;
export default productSlice.reducer;