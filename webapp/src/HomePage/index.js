import React from "react";
import CreateButton from "./CreateButton";
import CollectionList from "./CollectionList";
import Loader from "../common/components/Loader";
import { useSelector } from "react-redux";
import "./index.css";

const HomePage = () => {
  const showLoader = useSelector((state) => state.loader.show);
  if (showLoader) return <Loader />;
  return (
    <div className="homepage">
      <CollectionList />
      <CreateButton />
    </div>
  );
};

export default HomePage;
