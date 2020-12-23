import React, { useState } from "react";
import ImageList from "./ImageList";
import TitleInput from "./TitleInput";
import DateInput from "./DateInput";
import BackButton from "../common/components/BackButton";
import HiddenFileInput from "../common/components/HiddenFileInput";
import addImagesToCollection from "../common/functions/addImagesToCollection";
import { edit } from "../redux/CollectionList";
import { useSelector } from "react-redux";
import { toggle } from "../redux/Loader";
import { useHistory } from "react-router-dom";
import store from "../redux/store";
import "./CreatePage.css";

const CreatePage = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");

  const currentDate = new Date();

  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;
  const [date, setDate] = useState(formattedDate);

  const collections = useSelector((state) => state.collection.data);

  const images = collections[collections.length - 1].images;

  const handleAddMorePress = () => {
    const fileInput = document.getElementById("create-page-hidden-file-input");
    fileInput.click();
  };

  const handleUpload = async (event) => {
    store.dispatch(toggle());
    await addImagesToCollection(event.target.files);
    store.dispatch(toggle());
  };

  const handleBackPress = () => {
    history.push("/");
  };

  const handleSavePress = () => {
    if (title === "") {
      alert(`Please enter Title`);
    }
    if (title.length > 0 && date) {
      const id = collections[collections.length - 1].id;
      store.dispatch(edit({ id, title, date }));
      history.push("/");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <ImageList images={images} />
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
