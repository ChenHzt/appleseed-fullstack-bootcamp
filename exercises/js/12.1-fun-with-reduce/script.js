const arr = [10, 20, 25, 30, 31, 91, 80, 10, 40, 20, 70];

const max_reducer = (max, current) => (max > current ? max : current);

console.log(arr.reduce(max_reducer));

const sumEvenNumbers_reducer = (sum, current) =>
  current % 2 ? sum : sum + current;

console.log(arr.reduce(sumEvenNumbers_reducer));

const sum_reducer = (sum, current) => sum + current;

console.log(arr.reduce(sum_reducer) / arr.length);
