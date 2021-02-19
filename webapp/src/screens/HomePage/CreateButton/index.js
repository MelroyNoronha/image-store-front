import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";


const CreateButton = (props) => {
  return (
    <button className={styles.button} onClick={props.handleCreatePress}>
      <FontAwesomeIcon icon={faCamera} className={styles.cameraIcon} />
      <p className={styles.buttonText}>Create</p>
    </button>
  );
};

export default CreateButton;
