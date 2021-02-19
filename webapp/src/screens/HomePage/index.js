import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { get } from "idb-keyval";
import CreateButton from "./CreateButton/";
import CollectionList from "./CollectionList/";
import HiddenFileInput from "../../common/components/HiddenFileInput/index";
import Loader from "../../common/components/Loader/";
import createImagesArray from "../../common/functions/createImagesArray";
import updateCollectionFromStorage from "../../common/functions/updateCollectionFromStorage";
import styles from "./index.module.css";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    let componentIsMounted = true;

    (async () => {
      const storedUserCollections = await get("collections");
      if (storedUserCollections && componentIsMounted)
        updateCollectionFromStorage(storedUserCollections);
    })();

    return () => {
      componentIsMounted = false;
    };
  });

  const userCollections = useSelector((state) => state.collection.data);

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
    <div className={styles.homepage}>
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
