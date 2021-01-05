import { readFile } from "./readFile";

const createImagesArray = async (files) => {
  let images = [];
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
  return images;
}
export default createImagesArray;