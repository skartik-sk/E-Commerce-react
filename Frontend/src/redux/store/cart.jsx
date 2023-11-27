import { configureStore } from "@reduxjs/toolkit";
import cartstore from "../reducers/addToCart";
import  fetcData  from "../reducers/fetchData";

export default configureStore({
  reducer: {
    addtocart: cartstore,
    fetch: fetcData,
  },
});
