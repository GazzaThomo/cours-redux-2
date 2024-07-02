import { createSlice } from "@reduxjs/toolkit";

export const ownerSlice = createSlice({
  name: "owner",
  initialState: {},
  reducers: {
    updateFirstName: (currentState, action) => {
      const owner = { ...currentState.owner, firstName: action.payload };
      return { ...currentState, ...owner };
    },
  },
});
