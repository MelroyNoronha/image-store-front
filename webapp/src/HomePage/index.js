import React from "react";
import CreateButton from "./CreateButton";
import CollectionList from "./CollectionList";
import "./index.css";
// import image list component here


class HomePage extends React.Component {

  render() {
    return (
      <div className="homepage">
        
        <CollectionList />
        <CreateButton />
        

      </div>
    );
  }
}

export default HomePage;
