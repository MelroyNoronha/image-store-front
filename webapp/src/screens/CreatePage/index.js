import React, { useState, useEffect } from "react";
import ImageList from "../../common/components/ImageList";
import TitleInput from "../../common/components/TitleInput";
import DateInput from "../../common/components/DateInput";
import BackButton from "../../common/components/BackButton/index.js";
import HiddenFileInput from "../../common/components/HiddenFileInput/index";
import createImagesArray from "../../common/functions/createImagesArray";
import createCollection from "../../common/functions/createCollection";
import getStandardDateFormat from "../../common/functions/getStandardDateFormat";
import Button from "../../common/components/Button";
import { useHistory } from "react-router-dom";
// import styles from "./index.module.css";

const CreatePage = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (!props.location.state) {
      openFileBrowser();
    }
  }, [props.location.state]);

  const userSelectedImages = props.location.state
    ? props.location.state.images
    : [];

  const [images, setImages] = useState(userSelectedImages);

  const [title, setTitle] = useState("");

  const currentDate = new Date();

  const formattedDate = getStandardDateFormat(currentDate);

  const [date, setDate] = useState(formattedDate);

  const openFileBrowser = () => {
    const fileInput = document.getElementById("create-page-hidden-file-input");
    fileInput.click();
  };

  const handleAddMorePress = () => {
    openFileBrowser();
  };

  const handleUpload = async (event) => {
    const addedImages = await createImagesArray(event.target.files);
    let newImages = [...images, ...addedImages];
    setImages(newImages);
  };

  const handleBackPress = () => {
    history.push("/");
  };

  const handleSavePress = () => {
    if (title === "") {
      alert(`Please enter Title`);
    } else if (images.length === 0) {
      alert(`You must add at least one image`);
    } else {
      createCollection(title, date, images);
      history.push("/");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const deleteImage = (deletionIndex) => {
    const updatedImages = images.filter(
      (_images, index) => index !== deletionIndex
    );
    setImages(updatedImages);
  };

  return (
    <div>
      <ImageList images={images} deleteImage={deleteImage} />
      <HiddenFileInput
        id="create-page-hidden-file-input"
        handleUpload={handleUpload}
      />
      <DateInput handleDateChange={handleDateChange} date={date} />
      <TitleInput handleTitleChange={handleTitleChange} title={title} />
      <div className="AddMoreAndSavebuttonsContainer">
        <Button text={"Add More"} onClick={handleAddMorePress} />
        <Button text={"Save"} onClick={handleSavePress} />
      </div>
      <BackButton onClick={handleBackPress} />
    </div>
  );
};

export default CreatePage;
