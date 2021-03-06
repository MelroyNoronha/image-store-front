import React, { useState } from "react";
import ImageList from "../../common/components/ImageList";
import HiddenFileInput from "../../common/components/HiddenFileInput/index";
import createImagesArray from "../../common/functions/createImagesArray";
import DateInput from "../../common/components/DateInput";
import getStandardDateFormat from "../../common/functions/getStandardDateFormat";
import TitleInput from "../../common/components/TitleInput";
import BackButton from "../../common/components/BackButton/index.js";
import editCollection from "../../common/functions/editCollection";
import Button from "../../common/components/Button"
import { useHistory } from "react-router-dom";
import "./index.module.css";

const EditPage = (props) => {
  const history = useHistory();

  const [images, setImages] = useState(props.location.state.data.images);

  const [title, setTitle] = useState(props.location.state.data.title);

  const formattedDate = getStandardDateFormat(
    new Date(props.location.state.data.date)
  );

  const [date, setDate] = useState(formattedDate);

  const handleAddMorePress = () => {
    const fileInput = document.getElementById("edit-page-hidden-file-input");
    fileInput.click();
  };

  const handleSavePress = () => {
    if (title === "") {
      alert(`Please enter Title`);
    } else {
      const id = props.location.state.data.id;
      editCollection(id, title, date, images);
      history.push("/");
    }
  };

  const handleBackPress = () => {
    history.push("/");
  };

  const deleteImage = (deletionIndex) => {
    const updatedImages = images.filter(
      (_images, index) => index !== deletionIndex
    );
    setImages(updatedImages);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpload = async (event) => {
    const addedImages = await createImagesArray(event.target.files);
    let newImages = [...images, ...addedImages];
    setImages(newImages);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <ImageList deleteImage={deleteImage} images={images} />
      <HiddenFileInput
        id="edit-page-hidden-file-input"
        handleUpload={handleUpload}
      />
      <DateInput handleDateChange={handleDateChange} date={date} />
      <TitleInput handleTitleChange={handleTitleChange} title={title} />
      <div className="AddMoreAndSavebuttonsContainer">

        <Button text={"Add More"} onClick={handleAddMorePress}/>

        <Button text={"Save"} onClick={handleSavePress}/>

      </div>
      <BackButton onClick={handleBackPress} />
    </div>
  );
};

export default EditPage;
