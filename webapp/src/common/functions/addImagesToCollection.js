// addImagesToCollection dependencies:
import { edit } from "../../redux/CollectionList";
import { readFile } from "./readFile";
import store from "../../redux/store";

const addImagesToCollection = async (files) => {
  const images = [];
  for (let file of files) {
    const newFile = await readFile(file);
    const image = {
      dataURL: newFile.dataURL,
      name: newFile.file.name,
      size: newFile.file.size,
      type: newFile.file.type,
    };
    images.push(image);
  }
  const collections = store.getState().collection.data;
  const id = collections[collections.length - 1].id;
  store.dispatch(edit({ id, images }));
};

export default addImagesToCollection;
