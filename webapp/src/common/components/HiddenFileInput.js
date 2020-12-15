import React from "react";
import "./HiddenFileInput.css";

const HiddenFileInput = (props) => {
  return (
    <input
      multiple
      id={props.id}
      type="file"
      accept="image/*"
      onChange={props.handleUpload}
    />
  );
};

export default HiddenFileInput;
