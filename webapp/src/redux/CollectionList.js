import { createSlice } from "@reduxjs/toolkit";

export const collectionList = createSlice({
  name: "collectionList",
  initialState: { data: [] },
  reducers: {
    create: (state, action) => {
      state.data.push(action.payload);
    },
    edit: (state, action) => {

      if (action.payload.images) {
        const collectionToEdit = state.data.find(
          (collection) => collection.id === action.payload.id
        );
        collectionToEdit.images.push(...action.payload.images);
      }
    },
  },
});

export const { create, edit } = collectionList.actions;

export default collectionList.reducer;
