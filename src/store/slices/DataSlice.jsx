import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData= createAsyncThunk("data", async (args,{rejectWithValue})=>{
  try {
    const a = await axios.get( "https://fakestoreapi.com/products");

 const  b = await a.data
 
  return b 
    
  } catch (error) {
  return  rejectWithValue(error.message)
  }
  
})

const initial = {
    loading: false,
    
    product: [],
    
    error: null,
  };

  const dataSlice= createSlice({
    name:'data' ,
    initialState:initial, 
    extraReducers: (builder) => {
      builder.addCase(getData.pending,
        (state) => {
          state.loading = true;
             
             })
                builder.addCase(getData.fulfilled,
            (state, action) => {
              state.loading = false;
                  state.product= action.payload
                
                  
                 })
                 builder.addCase(getData.rejected,
                  (state, action) => {
                     
                       state.loading = false;
                       state.error= action.payload
                       })
      },
  })


  export default dataSlice