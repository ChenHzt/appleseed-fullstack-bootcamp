const makeAllCaps = (words) =>
  new Promise((resolve, reject) => {
    resolve(words.map((word) => word.toUpperCase()));
  });

const sortWords = (words) =>
  new Promise((resolve, reject) => {
    resolve(words.sort());
  });

makeAllCaps(['I', 'am', 'array', 'of', 'words'])
  .then((res) => {
    console.log(res);
    return sortWords(res);
  })
  .then((res) => console.log(res));
