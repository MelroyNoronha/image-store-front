import React, { useState } from "react";
import "./DateInput.css";

const DateInput = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;
  const [date, setDate] = useState(formattedDate);
  console.log(formattedDate);
  return (
    <div>
      <input
        type="date"
        id="date-input"
        name="trip-start"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
    </div>
  );
};

export default DateInput;
