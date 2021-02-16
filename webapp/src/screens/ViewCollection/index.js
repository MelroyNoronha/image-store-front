import React from "react";
import styles from "./index.module.css";

const ViewCollection = (props) => (
  <div className={styles.imagesContainer}>
    {props.location.state.images.map((image, index) => (
      <img
        className={styles.image}
        src={image.dataURL}
        alt={image.name}
        key={index}
      />
    ))}
  </div>
);

export default ViewCollection;
