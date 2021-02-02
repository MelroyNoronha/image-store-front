import { setCollection } from "../../redux/reducers/CollectionList";
import store from "../../redux/store";

const updateCollectionFromStorage = (collection) => {
  store.dispatch(setCollection(collection));
};

export default updateCollectionFromStorage;
