import React from "react";
import "./index.css";

const ViewCollection = (props) => (
  <div id="images-container">
    {props.location.state.images.map((image, index) => (
      <img className="image" src={image.dataURL} alt={image.name} key={index} />
    ))}
  </div>
);

export default ViewCollection;
