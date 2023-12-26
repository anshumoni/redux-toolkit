import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

console.log("slice",cartReducer);
 const store = configureStore({
  reducer:{
   cart:cartReducer
  }
  })
export default store

