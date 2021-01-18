import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateButton from "./CreateButton";
import CollectionList from "./CollectionList";
import HiddenFileInput from "../../common/components/HiddenFileInput";
import Loader from "../../common/components/Loader";
import createImagesArray from "../../common/functions/createImagesArray";
import { get } from "idb-keyval";
import "./index.css";

const HomePage = () => {
  const history = useHistory();

  const [userCollections, setUserCollections] = useState([]);

  (async () => {
    const storedUserCollections = await get("collections");
    if (storedUserCollections) setUserCollections(storedUserCollections);
  })();

  console.log();

  const handleCreatePress = () => {
    const fileInput = document.getElementById("homepage-hidden-file-input");
    fileInput.click();
  };

  const handleUpload = async (event) => {
    history.push("/create", {
      images: await createImagesArray(event.target.files),
    });
  };

  const showLoader = useSelector((state) => state.loader.show);
  if (showLoader) return <Loader />;
  return (
    <div className="homepage">
      <CollectionList userCollections={userCollections} />
      <CreateButton handleCreatePress={handleCreatePress} />
      <HiddenFileInput
        handleUpload={handleUpload}
        id="homepage-hidden-file-input"
      />
    </div>
  );
};

export default HomePage;
