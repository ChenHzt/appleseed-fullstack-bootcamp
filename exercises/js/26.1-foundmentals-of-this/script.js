// question 1

console.log(this);
// it will print the global veriable Window

// question 2

const myObj = {
  name: 'Timmy',
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
// arrow functions don't bind their own scope, but inherit it from the parent one, which in this case is window or the global object

// question 3

const myFuncDec = function () {
  console.log(this);
};
myFuncDec();

// question 4
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

// question 5
document.querySelector('.element').addEventListener('click',() => {
  console.log(this);
});
