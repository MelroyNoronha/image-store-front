import { createSlice } from "@reduxjs/toolkit";

export const collectionList = createSlice({
  name: "collectionList",
  initialState: { data: [] },
  reducers: {
    setCollection: (state, action) => {
      state.data = action.payload;
    },
    create: (state, action) => {
      state.data.push(action.payload);
    },
    edit: (state, action) => {
      const collectionToEdit = state.data.find(
        (collection) => collection.id === action.payload.id
      );

      if (action.payload.images) {
        collectionToEdit.images = action.payload.images;
      }
      if (action.payload.title) {
        collectionToEdit.title = action.payload.title;
      }
      if (action.payload.date) {
        collectionToEdit.date = action.payload.date;
      }
    },
    deleteById: (state, action) => {
      const id = action.payload.id;
      const updatedCollectionList = state.data.filter(
        (collection) => id !== collection.id
      );
      state.data = updatedCollectionList;
    },
  },
});

export const {
  setCollection,
  create,
  edit,
  deleteById,
} = collectionList.actions;

export default collectionList.reducer;
