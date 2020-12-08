import React from "react";
import CreateButton from "./CreateButton";
import CollectionList from "./CollectionList";
import Loader from "../common/components/Loader";
import "./index.css";

class HomePage extends React.Component {
  

  render() {
    return (
      <div className="homepage">
        <Loader />
        <CollectionList />
        <CreateButton createCollection={this.createCollection} />
      </div>
    );
  }
}

export default HomePage;
