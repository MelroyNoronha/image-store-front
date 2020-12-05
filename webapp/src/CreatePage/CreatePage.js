import React from "react";
import "./CreatePage.css";
import ImageList from "./ImageList";
import { useSelector } from "react-redux";

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
        <button class="button">Add More</button>
        <button class="button">Save</button>
      </div>
    </div>
  );
};

export default CreatePage;
