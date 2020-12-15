import React from "react";
import { useHistory } from "react-router-dom";
import { toggle } from "../redux/Loader";
import { useSelector } from "react-redux";
import store from "../redux/store";
import createCollection from "../common/functions/createCollection";
import CreateButton from "./CreateButton";
import CollectionList from "./CollectionList";
import HiddenFileInput from "../common/components/HiddenFileInput";
import Loader from "../common/components/Loader";
import "./index.css";

const HomePage = () => {
  const history = useHistory();

  const handleCreatePress = () => {
    const fileInput = document.getElementById("homepage-hidden-file-input");
    fileInput.click();
  };

  const handleUpload = async (event) => {
    store.dispatch(toggle());
    await createCollection(event.target.files);
    store.dispatch(toggle());
    history.push("/create");
  };

  const showLoader = useSelector((state) => state.loader.show);
  if (showLoader) return <Loader />;
  return (
    <div className="homepage">
      <CollectionList />
      <CreateButton handleCreatePress={handleCreatePress} />
      <HiddenFileInput
        handleUpload={handleUpload}
        id="homepage-hidden-file-input"
      />
    </div>
  );
};

export default HomePage;
