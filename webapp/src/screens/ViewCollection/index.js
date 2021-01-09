import React from "react";
import "./index.css";

const ViewCollection = (props) => (
  <div id="">
    {props.location.state.images.map((image, index) => (
      <img src={image.dataURL} alt={image.name} key={index} />
    ))}
  </div>
);

export default ViewCollection;
