import { configureStore } from "@reduxjs/toolkit";
import cartstore from "../reducers/addToCart";

export default configureStore({
  reducer: {
    addtocart: cartstore,
  },
});
