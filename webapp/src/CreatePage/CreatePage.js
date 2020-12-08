import React from "react";
import "./CreatePage.css";
import ImageList from "./ImageList";
import { useSelector } from "react-redux";
import BackButton from "../common/components/BackButton";

const CreatePage = () => {
  const images = useSelector((state) => {
    console.log(state);
    const collections = state.collection.data;
    return collections[collections.length - 1].images;
  });

  return (
    <div>
      <ImageList images={images} />
      <div id="buttons-container">
        <button className="small-button">Add More</button>
        <button className="small-button">Save</button>
      </div>
      <BackButton />
    </div>
  );
};

export default CreatePage;
