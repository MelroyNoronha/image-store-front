import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./CollectionList";
import loaderReducer from "./Loader";
export default configureStore({
  reducer: {
    collection: collectionReducer,
    loader: loaderReducer
  },
  
});
