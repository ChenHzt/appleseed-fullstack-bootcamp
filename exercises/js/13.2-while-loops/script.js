const populationArr = [9, 52, 60, 100];

function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

const populationPercentages = (population) => {
  const percentages = [];
  let i = 0;
  while (i < population.length) {
    percentages.push(percentageOfWorld1(population[i]));
    i++;
  }
  return percentages;
};
console.log(populationPercentages(populationArr));

// for this task I would prefer using a regular for loop,
// because it already takes care of initializing i and increasing it.
