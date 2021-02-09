/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }

const welcomeExplicit = () => {
  const welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
};

const welcomeImplicit = () => 'Welcome to Appleseeds Bootcamp!';

// function power(a) {
//   const myNumber = a;
//   const result = Math.pow(myNumber, 2);
//   return result;
// }

const powerExplicit = (a) => {
  const myNumber = a;
  const result = Math.pow(myNumber, 2);
  return result;
};

const powerImplicit = (a) => Math.pow(a, 2);

// From function expressions to IIFE functions.
// const squareRoot = (a) => Math.sqrt(a);
const squareRoot = (function (a) {
  return Math.sqrt(a);
})();

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
const squarandomNumbersreRoot = (function (a, b) {
  return Math.random() * (a - b) + b;
})();
