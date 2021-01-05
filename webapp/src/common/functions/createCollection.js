// createCollection dependencies:
import { create } from "../../redux/CollectionList";
import { v4 as uuidv4 } from "uuid";
import store from "../../redux/store";

const createCollection = (title, date, images) => {
  store.dispatch(create({ id: uuidv4(), title, date, images }));
};

export default createCollection;
