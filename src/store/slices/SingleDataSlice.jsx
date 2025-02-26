import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleData= createAsyncThunk("single", async (args,{rejectWithValue})=>{
  try {
    const singlrData = await axios.get(args);

    return await singlrData.data;
  
    
  } catch (error) {
  return  rejectWithValue(error.message)
  }
  
})

const initial = {
    loading: false,
    singleProducts : [],
    error: null,
  };

  const singleDataSlice= createSlice({
    name:'singleData' ,
    initialState:initial, 
    extraReducers: (builder) => {
      builder.addCase(getSingleData.pending,
        (state) => {
          state.loading = true;
             
             })
                builder.addCase(getSingleData.fulfilled,
            (state, action) => {
              state.loading = false;
                  state.singleProducts= action.payload
                 
                  
                 })
                 builder.addCase(getSingleData.rejected,
                  (state, action) => {
                       state.loading = false;
                       state.error= action.payload
                       })
      },
  })


  export default singleDataSlice