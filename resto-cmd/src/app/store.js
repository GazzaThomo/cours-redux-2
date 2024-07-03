import {
  combineReducers,
  configureStore,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import { notesSlice } from "../features/notes/notesSlices";
import { menuSlice } from "../features/menu/menuSlice";

let state = {
  value: null,
  owner: {},
  list: [],
};

// export const updateFirstName = createAction("UPDATE_FIRSTNAME", (firstName) => {
//   return {
//     payload: firstName,
//   };
// });

// const reducer = createReducer(state, (builder) => {
//   builder.addCase(updateFirstName, (currentState, action) => {
//     currentState.owner.firstName = action.payload;
//   });
// });

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    owner: ownerSlice.reducer,
    list: cartSlice.reducer,
    notes: notesSlice.reducer,
    menu: menuSlice.reducer,
  }),
  // Liste des middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend((store) => (next) => (action) => {
        console.log("Action", action);
        next(action);
      })
      .concat(thunk),
});
