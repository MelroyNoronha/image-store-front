import React, { useState } from "react";
import "./DateInput.css";

const DateInput = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;
  const [date, setDate] = useState(formattedDate);

  // const handleDatePress = () => {
  //   const dateInput = document.getElementById("date-input");
  //   console.log("DEBUG", dateInput.focus());
  //   dateInput.focus(); // PROBLEM-HERE
  // };

  return (
    <div id="date-input-container">
      <input
        type="date"
        id="date-input"
        name="date-input"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      {/* <p onClick={handleDatePress}>{date}</p> */} 
    </div>
  );
};

export default DateInput;
