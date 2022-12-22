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

function getName(email) {
  const pattern = /^([\w-\.])+@/g;
  const match = email.match(pattern)[0].toString();

  const formatted = match.replace("@", "").replace("_", " ").replace(".", " ");
  return titleCase(formatted);
}

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());
}

module.exports = { chatTimeFormatter, getName, pad, titleCase };
