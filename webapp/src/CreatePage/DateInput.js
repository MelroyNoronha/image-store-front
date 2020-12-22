import React, { useState } from "react";
import "./DateInput.css";
import { getHumanFriendlyDate } from "../common/functions/humanFriendlyDate";
const DateInput = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;
  const [date, setDate] = useState(formattedDate);
  const humanFriendlyDate = getHumanFriendlyDate(new Date(date));

  // const handleDatePress = () => {
  //   const dateInput = document.getElementById("date-input");
  //   console.log("DEBUG", dateInput.focus());
  //   dateInput.focus(); // PROBLEM-HERE
  // };
  console.log(humanFriendlyDate);
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
