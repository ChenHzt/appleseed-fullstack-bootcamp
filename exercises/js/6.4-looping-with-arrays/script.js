const populationArr = [9, 52, 60, 100];

function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

const populationPercentages = (population) => {
  const percentages = [];
  for (let i = 0; i < population.length; i++)
    percentages.push(percentageOfWorld1(population[i]));
  return percentages;
};

console.log(populationPercentages(populationArr));
