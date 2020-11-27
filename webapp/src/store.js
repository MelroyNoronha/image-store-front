import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./CreatePage/collectionSlice";

export default configureStore({
  reducer: {
    collection: collectionReducer,
  },
});
