import React from "react";
import "./index.css";

const HiddenFileInput = (props) => {
  return (
    <input
    className="hidden-input"
      multiple
      id={props.id}
      type="file"
      accept="image/*"
      onChange={props.handleUpload}
    />
  );
};

export default HiddenFileInput;