const greaterThan10 = (number) =>
  new Promise((resolve, reject) => {
    if (number > 10) resolve(`${number} is greater than 10`);
    else reject(`${number} is not greater than 10`);
  });

const handleGraterThan10 = (num) => {
  greaterThan10(num)
    .then((value) => console.log(value))
    .catch((err) => console.log(err));
};

handleGraterThan10(5);
handleGraterThan10(10);
handleGraterThan10(100);
