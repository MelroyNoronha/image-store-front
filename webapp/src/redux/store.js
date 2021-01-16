import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./reducers/CollectionList";
import loaderReducer from "./reducers/Loader";
import { get, set } from "idb-keyval";

const preLoadedState = get("collection") || {};

const store = configureStore({
  reducer: {
    collection: collectionReducer,
    loader: loaderReducer,
  },
  preLoadedState,
});

store.subscribe(() => {
  const currentState = store.getState();
  const collections = currentState.collection.data;
  set("collections", collections);
});

export default store;
