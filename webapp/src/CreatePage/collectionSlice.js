import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collections",
  initialState: { collections: [] },
  reducers: {
    create: (state, action) => {
      state.collections.push(action.payload);
    },
  },
});

export const { create } = collectionSlice.actions;

export default collectionSlice.reducer;