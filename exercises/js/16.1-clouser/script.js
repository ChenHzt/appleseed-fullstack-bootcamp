/* eslint-disable  */

/* block 1 */

/*
result:
  5
  the arguments we send to someFunction are never in use. 
  all the inner function does is to return the value of b which is alwase 5.
*/

console.log('*******block 1********');
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result);

/* block 2 */

/*
result:
  1
  a is defined as global outside of the function scope.
  inside the function a is defined localy as a function first (because of hoisting).
  after it is declared locally to the function it is changed to 10.
  when a is printed outside of the function the global a is printed and it has never changed
*/


console.log('*******block 2********');
var a = 1;
function b2() {
  a = 10;
  return;
  function a() { }
}
b2();
console.log(a);

/* block 3 */

/*
result:
  3
  3
  3
  because of the settimeout function the log function is called only after the i has changed.
*/


console.log('*******block 3********');
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

