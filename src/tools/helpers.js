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

export function convertInputDate(date){
  const day = date.substring(0, 2);
  const month = date.substring(3, 5) - 1;
  const year = date.substring(6, 10);

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
}

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
