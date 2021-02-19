import React from "react";
import styles from "./index.module.css";

const DateInput = (props) => {
  return (
    <div className={styles.dateInputContainer}>
      <input
        type="date"
        className={styles.dateInput}
        name="date-input"
        value={props.date}
        onChange={props.handleDateChange}
      />
    </div>
  );
};

export default DateInput;
