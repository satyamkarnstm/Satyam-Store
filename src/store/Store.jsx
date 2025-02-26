import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/DataSlice";
import singleDataSlice from "./slices/SingleDataSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore ({
 reducer:{
          data:dataSlice.reducer,
    SingleData:singleDataSlice.reducer,
         carts:cartSlice.reducer
 }
})
export default store
