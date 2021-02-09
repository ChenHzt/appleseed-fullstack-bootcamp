function getCurrentDayName() {
  const dateObj = new Date();
  const weekday = dateObj.toLocaleString('en-GB', { weekday: 'long' });
  return weekday;
}
function getCurrentDayOfMonth() {
  const dateObj = new Date();
  const dayOfMonth = dateObj.getDate();
  return dayOfMonth;
}
function getCurrentMonth() {
  const dateObj = new Date();
  const month = dateObj.toLocaleString('en-GB', { month: 'long' });
  return month;
}

function getCurrentYear() {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  return year;
}

function getDate() {
  return `Today is ${getCurrentDayName()} the ${getCurrentDayOfMonth()} of ${getCurrentMonth()}, ${getCurrentYear()} `;
}

console.log(getDate());
