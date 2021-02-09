/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
const welcomeFunc = () => {
  const welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
};

const power = (a) => {
  const myNumber = a;
  const result = Math.pow(myNumber, 2);
  return result;
};

const add = (a, b = 5) => {
  const myNumber = a;
  const sum = myNumber + b;
  return sum;
};

// From function expressions to function declarations
function hello() {
  return 'Hello!';
}

function squareRoot(a) {
  return Math.sqrt(a);
}

function randomNumbers(a, b) {
  return Math.random() * (a - b) + b;
}
