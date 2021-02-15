import React from "react";
import CollectionThumbnail from "./CollectionThumbnail";
import styles from "./CollectionList.module.css";

const CollectionList = (props) => {
  return (
    <div className={styles.container}>
      {props.userCollections.map((collection, key) => (
        <CollectionThumbnail data={collection} key={key} />
      ))}
    </div>
  );
};

export default CollectionList;
