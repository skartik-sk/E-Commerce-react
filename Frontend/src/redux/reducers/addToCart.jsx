import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
  total: localStorage.getItem("Total")
    ? JSON.parse(localStorage.getItem("Total"))
    : 0,
  listOfProduct: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  // Quantity:localStorage.getItem("quantity")? JSON.parse(localStorage.getItem("quantity")):[],
};

export const addtocart = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const isExist = state.listOfProduct.find(
        (i) => i.datas.id === item.datas.id
      );
      if (isExist) {
        isExist.quantity += 1;
        listOfProduct: state.listOfProduct.map((i) =>
          i.datas.id === item.datas.id ? item : i
        );
      } else {
        state.listOfProduct.push(action.payload);
      }
      state.total += action.payload.datas.price;
      localStorage.setItem("cartItem", JSON.stringify(state.listOfProduct));
      localStorage.setItem("Total", JSON.stringify(state.total));
    },
    del: (state, action) => {
      state.total -= action.payload.datas.price * action.payload.quantity;
      const item = action.payload;
      const k = state.listOfProduct.filter((e) => {
        return e.datas.id !== action.payload.datas.id;
      });
      state.listOfProduct = k;

      localStorage.setItem("cartItem", JSON.stringify(state.listOfProduct));
      localStorage.setItem("Total", JSON.stringify(state.total));
    },
    incrementByAmount: (state, action) => {
      state.listOfProduct.pop(action.payload);
      state.total += action.payload;

      localStorage.setItem("cartItem", JSON.stringify(state.listOfProduct));
      localStorage.setItem("Total", JSON.stringify(state.total));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, del, incrementByAmount } = addtocart.actions;
export const selectCount = (state) => state.addtocart.total;

export default addtocart.reducer;
