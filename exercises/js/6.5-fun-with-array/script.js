const arr1 = Array(100).fill('item');
console.log(arr1);

const arr2 = Array.from({ length: 100 }, (v, i) => i + 1);
console.log(arr2);

const myObject = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'Israel',
};
const arr3 = Object.values(myObject);
console.log(arr3);

const arr4 = ['a', 'b', 'c'];
const obj4 = { ...arr4 };
console.log(obj4);

console.log(`is ${arr4} an array? ${Array.isArray(arr4)}`);
