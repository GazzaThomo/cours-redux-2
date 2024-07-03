import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListQuantityProductPerName } from "../../app/selectors";
import * as ProductList from "../../common/models";

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

const TIME_TO_RESET_ORDER = 5000;

export const resetOrderThunk = createAsyncThunk(
  "cart/resertOrderThunk",
  async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject();
      }, TIME_TO_RESET_ORDER);
    });
  }
);

export const addProductThunk = createAsyncThunk(
  "cart/addProductThunk",
  async (product, thunkApi) => {
    thunkApi.dispatch(cartSlice.actions.addProduct(product));
    thunkApi.dispatch(resetOrderThunk());
    // Promise retourner par notre thunk
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const state = thunkApi.getState();
        const numberProductPerName = getListQuantityProductPerName(state);
        const numberForSpecialOffer = numberProductPerName.find(
          (item) => item.title === "Poulet Croquant"
        )?.quantity;
        if (numberForSpecialOffer === 2) {
          if (
            window.confirm(
              "Voulez-vous ajouter une troisième fois ce produit à moitié prix ?"
            )
          ) {
            resolve();
          } else {
            reject();
          }
        } else {
          reject();
        }
      }, 5000);
    });
  }
);

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
  extraReducers: function (builder) {
    builder.addCase(addProductThunk.fulfilled, (state) => {
      const specialOffer = ProductList.PouletCroquant;
      return [
        ...state,
        {
          ...specialOffer,
          price: Math.round((ProductList.PouletCroquant.price / 2) * 100) / 100,
        },
      ];
    });
    builder
      .addCase(addProductThunk.rejected, (state) => {
        return [...state];
      })
      .addCase(resetOrderThunk.rejected, () => {
        return [];
      });
  },
});
