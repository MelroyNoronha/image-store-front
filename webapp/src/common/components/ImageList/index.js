import React from "react";
import "./index.css";
import cancelIcon from "../../../assets/icons/cross-dark.svg";

const ImageList = (props) => (
  <div id="image-list-container">
    {props.images.map((image, index) => (
      <div key={index} id="image-container-thumbnail">
        <img id="image" src={image.dataURL} alt="uploaded" />
        <img
          src={cancelIcon}
          onClick={() => props.deleteImage(index)}
          className="image-delete-icon"
          alt="delete icon"
        />
      </div>
    ))}
  </div>
);

export default ImageList;
