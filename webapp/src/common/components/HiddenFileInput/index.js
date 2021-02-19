import React from "react";
import styles from "./index.module.css";

const HiddenFileInput = (props) => {
  return (
    <input
      className={styles.hiddenInput}
      multiple
      id={props.id}
      type="file"
      accept="image/*"
      onChange={props.handleUpload}
    />
  );
};

export default HiddenFileInput;
