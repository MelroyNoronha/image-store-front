import { deleteById } from "../../redux/CollectionList";
import store from "../../redux/store";

const deleteCollection = (id) => {
  store.dispatch(deleteById({ id }));
};

export default deleteCollection;
