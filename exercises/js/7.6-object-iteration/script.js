const keyValueSwap = (obj) => {
  const values = Object.keys(obj);
  const keys = Object.values(obj);
  const result = {};
  keys.forEach((key, i) => (result[key] = values[i]));
  return result;
};

console.log(keyValueSwap({ a: 1, b: 2, c: 3 }));
