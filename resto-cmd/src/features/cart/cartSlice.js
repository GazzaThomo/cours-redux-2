import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "list",
  initialState: {},
  reducers: {
    addProduct: (currentState, action) => {
      currentState.list.push(action.payload);
    },
    removeProduct: (currentState, action) => {
      currentState.list = currentState.list.filter(
        (item, index) => index !== action.payload
      );
    },
    applyVoucher: (currentState, action) => {
      currentState.list = currentState.list.map((item) =>
        item.title === "Super Crémeux"
          ? { ...item, price: action.payload.price }
          : item
      );
    },
  },
});
