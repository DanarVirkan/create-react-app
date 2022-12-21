function chatTimeFormatter(datetime) {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(datetime);
  const now = new Date(Date.now());

  if (new Date(now.getTime() - date.getTime()).getMinutes() < 1) {
    return "just now";
  }

  if (date.getDate() != now.getDate()) {
    return `${date.getDate()} ${month[date.getMonth()]}`;
  } else {
    return `${date.getHours()}:${pad(date.getMinutes(), 2)}`;
  }
}

function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length - size);
}

export { chatTimeFormatter };
