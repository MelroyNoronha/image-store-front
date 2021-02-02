import React, { useState, useEffect } from "react";
import ImageList from "../../common/components/ImageList";
import TitleInput from "../../common/components/TitleInput";
import DateInput from "../../common/components/DateInput";
import BackButton from "../../common/components/BackButton";
import HiddenFileInput from "../../common/components/HiddenFileInput";
import createImagesArray from "../../common/functions/createImagesArray";
import createCollection from "../../common/functions/createCollection";
import getStandardDateFormat from "../../common/functions/getStandardDateFormat";
import { useHistory } from "react-router-dom";
import "./index.css";

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
      <div id="buttons-container">
        <button className="small-button" onClick={handleAddMorePress}>
          Add More
        </button>
        <button className="small-button" onClick={handleSavePress}>
          Save
        </button>
      </div>
      <BackButton onClick={handleBackPress} />
    </div>
  );
};

export default CreatePage;
