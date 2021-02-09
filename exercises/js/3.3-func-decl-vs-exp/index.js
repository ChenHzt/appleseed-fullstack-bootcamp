function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

console.log(`${percentageOfWorld1(9)}%`);
console.log(`${percentageOfWorld1(123)}%`);
console.log(`${percentageOfWorld1(5000)}%`);

const percentageOfWorld2 = (population) =>
  ((population / 7900) * 100).toFixed(2);

console.log(`${percentageOfWorld2(9)}%`);
console.log(`${percentageOfWorld2(123)}%`);
console.log(`${percentageOfWorld2(5000)}%`);
