import React from "react";
import cancelIcon from "../../../assets/icons/cross-dark.svg";
import styles from "./index.module.css";

const ImageList = (props) => (
  <div className={styles.imageListContainer}>
    {props.images.map((image, index) => (
      <div key={index} className={styles.imageContainerThumbnail}>
        <img className={styles.image} src={image.dataURL} alt="uploaded" />
        <img
          src={cancelIcon}
          onClick={() => props.deleteImage(index)}
          className={styles.imageDeleteIcon}
          alt="delete icon"
        />
      </div>
    ))}
  </div>
);

export default ImageList;
