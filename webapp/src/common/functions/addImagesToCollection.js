// addImagesToCollection dependencies:
import { edit } from "../../redux/CollectionList";
import store from "../../redux/store";
import createImagesArray from "./createImagesArray";

const addImagesToCollection = async (files) => {
  const images = await createImagesArray(files);
  const collections = store.getState().collection.data;
  const id = collections[collections.length - 1].id;
  store.dispatch(edit({ id, images }));
};

export default addImagesToCollection;