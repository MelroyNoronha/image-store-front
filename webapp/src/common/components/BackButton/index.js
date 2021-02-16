import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = (props) => (
  <div id="back-button-container">
    <FontAwesomeIcon icon={faChevronLeft} id="back-icon" />
    <button onClick={props.onClick}>Back</button>
  </div>
);

export default BackButton;
