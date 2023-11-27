import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  menClothing:[],
  womenClothing:[],
  jewelery:[],
  electronics:[],
  error: "",
  // Quantity:localStorage.getItem("quantity")? JSON.parse(localStorage.getItem("quantity")):[],
};
export const fetchByURL = createAsyncThunk("users/fetchByURL", async () => {
  const url = "https://fakestoreapi.com/products";
  const option = { method: "GET" };
  const response = await fetch(url, option);
  return response.json();
});

export const fetcData = createSlice({
  name: "fetcData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchByURL.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchByURL.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchByURL.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});



export default fetcData.reducer;
