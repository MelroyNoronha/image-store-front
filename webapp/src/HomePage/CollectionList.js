import React from "react";
import CollectionThumbnail from "./CollectionThumbnail";
import "./CollectionList.css";

const CollectionList = (props) => (
    <div id="container">
        {
            props.userCollections.map((collection, key) => (
                <CollectionThumbnail data={collection} key={key} />
            ))
        }
    </div>
);

export default CollectionList;