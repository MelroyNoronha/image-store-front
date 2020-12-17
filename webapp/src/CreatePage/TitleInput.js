import React from "react";
import "./TitleInput.css";

const TitleInput = () => {
  return (
    <div id="title-input-container">
      <label id="label">Title</label>
      <input type="text" id="text-input" name="text-input"></input>
    </div>
  );
};

export default TitleInput;
