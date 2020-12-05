import React from "react";
import "./BackButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => (
  <div id="back-button-container">
    <FontAwesomeIcon icon={faChevronLeft} id="back-icon" />
    <button>Back</button>
  </div>
);

export default BackButton;
