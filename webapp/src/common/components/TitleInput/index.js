import React from "react";
import styles from "./index.module.css";

const TitleInput = (props) => {
  return (
    <div className={styles.titleInputContainer}>
      <label className={styles.label}>Title</label>
      <input
        type="text"
        className={styles.textInput}
        name="text-input"
        onChange={props.handleTitleChange}
        value={props.title}
      ></input>
    </div>
  );
};

export default TitleInput;
