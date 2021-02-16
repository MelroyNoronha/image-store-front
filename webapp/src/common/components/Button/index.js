import React from "react";
import styles from "./index.module.css";

const Button = (props) => (
  <button className={styles.button} onClick={props.onClick}>
    {props.text}
  </button>
);

export default Button;
