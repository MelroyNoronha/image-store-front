import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./CollectionList";

export default configureStore({
  reducer: {
    collection: collectionReducer,
  },
});
