import React from "react";
import "./CreateButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import createCollection from "../common/functions/createCollection";
const CreateButton = () => {
  const history = useHistory();

  const handleCreatePress = () => {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
  };

  const handleUpload = async (event) => {
    await createCollection(event.target.files);
    history.push("/create");
  };

  return (
    <button className="button" onClick={handleCreatePress}>
      <FontAwesomeIcon icon={faCamera} id="camera-icon" />
      <p id="button-text">Create</p>
      <input
        multiple
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
    </button>
  );
};

export default CreateButton;
