import collectionReducer from "./CollectionList";
import loaderReducer from "./Loader";

const RootReducer = () => {
  return {
    collection: collectionReducer,
    loader: loaderReducer,
  };
};
export default RootReducer;
