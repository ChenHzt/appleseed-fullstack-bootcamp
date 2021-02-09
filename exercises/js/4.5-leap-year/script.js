const isLeapYear = (year) => {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) return true;
  return false;
};

console.log(`is 2020 a leap year? ${isLeapYear(2020)}`);
console.log(`is 2100 a leap year? ${isLeapYear(2100)}`);
console.log(`is 2400 a leap year? ${isLeapYear(2400)}`);
