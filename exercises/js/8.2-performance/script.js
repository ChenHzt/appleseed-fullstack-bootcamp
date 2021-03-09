const obj = {};

const maxCount = 1000000;
console.time('object');
for (let i = 0; i < maxCount; i++) {
  // Perform the operation to be measured multiple times
  obj[`${i}`] = i;
}
console.timeEnd('object');

const myMap = new Map();
console.time('map');
for (let i = 0; i < maxCount; i++) {
  // Perform the operation to be measured multiple times
  myMap.set(`${i}`, i);
}
console.timeEnd('map');

console.time('object');
for (let i = 0; i < maxCount; i++) {
  // Perform the operation to be measured multiple times
  let j = obj[`${i}`];
}
console.timeEnd('object');

console.time('map');
for (let i = 0; i < maxCount; i++) {
  // Perform the operation to be measured multiple times
  myMap.get(`${i}`);
}
console.timeEnd('map');
