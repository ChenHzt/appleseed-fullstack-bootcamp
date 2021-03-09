/* eslint-disable no-extend-native */

Array.prototype.myfilter = function (func) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) filtered.push(this[i]);
  }
  return filtered;
};

const filteredArr = [1, 2, 3, 4, 5, 6].myfilter((element) => element % 2 === 0);
console.log(filteredArr);

Array.prototype.myfind = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) return i;
  }
  return -1;
};

const index = [1, 2, 3, 4, 5, 6].myfind((element) => element === 5);
console.log(index);
