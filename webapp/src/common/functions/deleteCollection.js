import { deleteById } from "../../redux/reducers/CollectionList";
import store from "../../redux/store";

const deleteCollection = (id) => {
  store.dispatch(deleteById({ id }));
};

export default deleteCollection;
