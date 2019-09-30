export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  let currentDate = year;
  if (month < 10) {
    currentDate = currentDate + "-0" + month;
  } else {
    currentDate = currentDate + "-" + month;
  }
  if (day < 10) {
    currentDate = currentDate + "-0" + day;
  } else {
    currentDate = currentDate + "-" + day;
  }
  return currentDate;
};

export const convertInputDate = date => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7) - 1;
  const day = date.substring(8, 10);

  return new Date(year, month, day, 0, 0, 0, 0).toLocaleDateString();
};

export function convertDatePart(name, value) {
  switch (name) {
    case "StartDate":
      return convertInputDate(value);
    case "Duration":
      return parseInt(value);
    default:
      return value;
  }
}
