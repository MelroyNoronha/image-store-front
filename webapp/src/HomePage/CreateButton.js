import React from "react";
import "./CreateButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { create } from "../CreatePage/collectionSlice";
import { useDispatch } from "react-redux";
import { readFile } from "../common/functions";

const CreateButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCreatePress = () => {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
  };

  const createCollection = async (files) => {
    const images = [];
    for (let file of files) {
      const newFile = await readFile(file);
      const image = {
        dataURL: newFile.dataURL,
        name: newFile.file.name,
        size: newFile.file.size,
        type: newFile.file.type,
      };
      images.push(image);
    }

    dispatch(create({ id: "", name: "", date: "", images }));
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
