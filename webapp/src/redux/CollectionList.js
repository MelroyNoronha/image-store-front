import { createSlice } from "@reduxjs/toolkit";

export const collectionList = createSlice({
  name: "collectionList",
  initialState: { data: [] },
  reducers: {
    create: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { create } = collectionList.actions;

export default collectionList.reducer;
