export const getHumanFriendlyDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const rawDay = date.getDate();
  console.log(rawDay);
  let day = "";
  switch (rawDay) {
    case 1:
    case 21:
    case 31:
      day = `${rawDay}st`;
      break;
    case 3:
    case 23:
      day = `${rawDay}rd`;
      break;
    case 2:
    case 22:
      day = `${rawDay}nd`;
      break;
    default:
      day = `${rawDay}th`;
  }
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};