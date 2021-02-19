import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const BackButton = (props) => (
  <div className={styles.backButtonContainer}>
    <FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon} />
    <button onClick={props.onClick}>Back</button>
  </div>
);

export default BackButton;
