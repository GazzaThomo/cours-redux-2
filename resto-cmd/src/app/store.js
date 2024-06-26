import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

let state = {
  value: null,
  list: [],
  firstName: null,
  orders: {},
};

// const reducer = (currentState, action) => {
//   switch (action.type) {
//     case "ADD_PRODUCT":
//       const listWithNewProduct = [...currentState.list, action.payload];
//       return { ...currentState, list: listWithNewProduct };
//     case "REMOVE_PRODUCT":
//       const list = currentState.list.filter(
//         (item, index) => index !== action.payload
//       );
//       return { ...currentState, list: list };
//     case "APPLY_VOUCHER":
//       const withVoucherList = currentState.list.map((item) =>
//         item.title === "Super Crémeux"
//           ? { ...item, price: action.payload.price }
//           : item
//       );
//       return { ...currentState, list: withVoucherList };

//     case "UPDATE_FIRSTNAME":
//       const owner = { ...currentState.owner, firstName: action.payload };
//       return { ...currentState, owner };
//     default:
//       return currentState;
//   }
// };

//redux toolkit. En quoi c'est moins complexe que le switch ????
export const addProduct = createAction("ADD_PRODUCT", (product) => {
  return {
    payload: product,
  };
});

export const removeProduct = createAction("REMOVE_PRODUCT", () => {});

export const applyVoucher = createAction("APPLY_VOUCHER", (voucher) => {
  return {
    payload: voucher,
  };
});

export const updateFirstName = createAction("UPDATE_FIRSTNAME", (firstName) => {
  return {
    payload: firstName,
  };
});

const reducer = createReducer(state, {
  [addProduct]: (currentState, action) => {
    const listWithNewProduct = [...currentState.list, action.payload];
    return { ...currentState, list: listWithNewProduct };
  },
  [removeProduct]: (currentState, action) => {
    const list = currentState.list.filter(
      (item, index) => index !== action.payload
    );
    return { ...currentState, list: list };
  },
  [applyVoucher]: (currentState, action) => {
    const withVoucherList = currentState.list.map((item) =>
      item.title === "Super Crémeux"
        ? { ...item, price: action.payload.price }
        : item
    );
    return { ...currentState, list: withVoucherList };
  },
  [updateFirstName]: (currentState, action) => {
    const owner = { ...currentState.owner, firstName: action.payload };
    return { ...currentState, owner };
  },
});

export const store = configureStore({
  preloadedState: state,
  reducer,
});
