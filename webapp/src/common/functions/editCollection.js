// editCollection dependencies:
import store from "../../redux/store";
import { edit } from "../../redux/reducers/CollectionList";

const editCollection = (id, title, date, images) => {
  store.dispatch(edit({ id, title, date, images }));
};

export default editCollection;