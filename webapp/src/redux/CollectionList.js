import { createSlice } from "@reduxjs/toolkit";

export const collectionList = createSlice({
  name: "collectionList",
  initialState: { data: [] },
  reducers: {
    create: (state, action) => {
      state.data.push(action.payload);
    },
    edit: (state, action) => {
      const collectionToEdit = state.data.find(
        (collection) => collection.id === action.payload.id
      );

      if (action.payload.images) {
        collectionToEdit.images.push(...action.payload.images);
      }
      if (action.payload.title) {
        collectionToEdit.title = action.payload.title;
      }
      if (action.payload.date) {
        collectionToEdit.date = action.payload.date;
      }
    },
  },
});

export const { create, edit } = collectionList.actions;

export default collectionList.reducer;
