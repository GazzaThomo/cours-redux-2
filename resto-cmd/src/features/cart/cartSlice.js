import { createSlice } from "@reduxjs/toolkit";

//this should work, but doesn't
// export const cartSlice = createSlice({
//   name: "list",
//   initialState: {},
//   reducers: {
//     addProduct: (currentState, action) => {
//       currentState.list.push(action.payload);
//     },
//     removeProduct: (currentState, action) => {
//       currentState.list = currentState.list.filter(
//         (item, index) => index !== action.payload
//       );
//     },
//     applyVoucher: (currentState, action) => {
//       currentState.list = currentState.list.map((item) =>
//         item.title === "Super Crémeux"
//           ? { ...item, price: action.payload.price }
//           : item
//       );
//     },
//   },
// });

// this is with old reducer methods, and works
export const cartSlice = createSlice({
  name: "list",
  initialState: {},
  reducers: {
    addProduct: (currentState, action) => {
      console.log(currentState);
      const listWithNewProduct = [...currentState, action.payload];
      return listWithNewProduct;
    },
    removeProduct: (currentState, action) => {
      const list = [...currentState.list].filter(
        (item, index) => index !== action.payload
      );
      return list;
    },
    applyVoucher: (currentState, action) => {
      const withVoucherList = currentState.map((item) =>
        item.title === "Super Crémeux"
          ? { ...item, price: action.payload.price }
          : item
      );
      return withVoucherList;
    },
  },
});
