import {
  combineReducers,
  configureStore,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import { notesSlice } from "../features/notes/notesSlices";

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
    list: cartSlice.reducer,
    owner: ownerSlice.reducer,
    notes: notesSlice.reducer,
  }),
});
