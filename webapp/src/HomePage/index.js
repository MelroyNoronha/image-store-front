import React from "react";
import CollectionThumbnail from "./CollectionThumbnail";
import CreateButton from "./CreateButton";
import UploadOrClick from "./UploadOrClick";
import "./index.css";

const userCollections = [
  {
    image:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Some Wedding",
    timestamp: "20th December 2020",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577083753695-e010191bacb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Diwali",
    timestamp: "10th November 2020",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
    title: "Holidays",
    timestamp: "10th December 2021",
  },
];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
    };
  }

  render() {
    return (
      <div className="homepage">
        {userCollections.map((collection, key) => (
          <CollectionThumbnail data={collection} key={key} />
        ))}

        {this.state.create ? (
          <UploadOrClick onBack={() => this.setState({ create: false })} />
        ) : (
          <CreateButton onClick={() => this.setState({ create: true })} />
        )}
      </div>
    );
  }
}

export default HomePage;
