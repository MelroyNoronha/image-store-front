import React from "react";
import "./CreatePage.css";
import ImageList from "./ImageList";
import TitleInput from "./TitleInput";
import BackButton from "../common/components/BackButton";
import HiddenFileInput from "../common/components/HiddenFileInput";
import addImagesToCollection from "../common/functions/addImagesToCollection";
import { useSelector } from "react-redux";
import { toggle } from "../redux/Loader";
import store from "../redux/store";

const CreatePage = () => {
  const images = useSelector((state) => {
    const collections = state.collection.data;
    return collections[collections.length - 1].images;
  });

  const handleAddMorePress = () => {
    const fileInput = document.getElementById("create-page-hidden-file-input");
    fileInput.click();
  };

  const handleUpload = async (event) => {
    store.dispatch(toggle());
    await addImagesToCollection(event.target.files);
    store.dispatch(toggle());
  };

  return (
    <div>
      <ImageList images={images} />
      <TitleInput />
      <div id="buttons-container">
        <HiddenFileInput
          id="create-page-hidden-file-input"
          handleUpload={handleUpload}
        />
        <button className="small-button" onClick={handleAddMorePress}>
          Add More
        </button>
        <button className="small-button">Save</button>
      </div>
      <BackButton />
    </div>
  );
};

export default CreatePage;
