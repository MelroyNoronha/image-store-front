import React from "react";
import CollectionThumbnail from "../CollectionThumbnail/";
import styles from "./index.module.css";

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
