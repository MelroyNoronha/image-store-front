import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./reducers/CollectionList";
import loaderReducer from "./reducers/Loader";

export default configureStore({
  reducer: {
    collection: collectionReducer,
    loader: loaderReducer,
  },
});
