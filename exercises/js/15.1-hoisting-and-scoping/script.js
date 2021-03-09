/* eslint-disable  */

/* block 1 */

/*
result:
  a is undefined - a is defined only after it is printed.
  2 - foo function will be hoisted therefore it will be declared first
fix:
  move var declaretion to the top

*/

function funcA() {
  var a = 1;
  console.log(a);
  console.log(foo());

  function foo() {
    return 2;
  }
}
funcA();

/* block 2 */

/*
result:
  Aurelio De Rosa - the full name is in the scope of the object
  John Doe - in test only the function is stored. when calling to this function outside of the scope of the object,
   it searches for the firstName in the upper acope and see 'John Doe'
fix:
  move var declaretion to the top

*/

console.clear();

var fullName = 'John Doe';
var obj = {
  fullName: 'Colin Ihrig',
  prop: {
    fullName: 'Aurelio De Rosa',
    getFullName() {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());



/* block 3 */

/*
result:
  undefined - a is not defined outside of the function scope
  number - Variable without a var declaration is treated as global.


*/

console.clear();

function funcB() {
  let a = blabla = 0;
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof blabla);


// /* block 4 */
// /*
// result:
//   2
//   2
//   this is because all the functions are hoisted to the top of the code.
//   and because the second function is secound it override the first function.
//   so both of the function calls, calls the second functions

// */

// console.clear();

// function funcC() {
//   console.log("1");
// }
// funcC();
// function funcC() {
//   console.log("2");
// }
// funcC();

// /* block 5 */
// /*
// result:
//   1 - variable without a var declaration is treated as global.
//   undefined - e is declared as var which is global to the scope it declared in


// */
// console.clear();


// function funcD1() {
//   d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//   var e = 1;
// }
// funcD2();
// // console.log(e);

// /* block 6 */
// /*
// result:
//   Value of f in global scope: undefined - f is not declared yet
//   Value of f in local scope: 1 - at the time the function called f is already decleared as global
  

// */

// console.clear();
// function funcE() {
//   console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE();

