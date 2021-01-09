import React from "react";
import "./DateInput.css";
const DateInput = (props) => {
  return (
    <div id="date-input-container">
      <input
        type="date"
        id="date-input"
        name="date-input"
        value={props.date}
        onChange={props.handleDateChange}
      />
    </div>
  );
};

export default DateInput;
