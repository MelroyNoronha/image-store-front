// createCollection dependencies:
import { create } from "../../redux/CollectionList";
import { readFile } from "./readFile";
import { v4 as uuidv4 } from "uuid";
import store from "../../redux/store";

const createCollection = async (files) => {
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
  store.dispatch(create({ id: uuidv4(), title: "", date: "", images }));
};

export default createCollection;
