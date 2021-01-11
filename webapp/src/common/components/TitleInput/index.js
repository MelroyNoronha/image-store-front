import React from "react";
import "./index.css";

const TitleInput = (props) => {
  return (
    <div id="title-input-container">
      <label id="label">Title</label>
      <input
        type="text"
        id="text-input"
        name="text-input"
        onChange={props.handleTitleChange}
        value={props.title}
      ></input>
    </div>
  );
};

export default TitleInput;
