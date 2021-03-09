const isString = (str, callback) => {
  typeof str === 'string' ? callback(str) : null;
};

const logFunc = (str) => {
  console.log(str);
};

isString('dsdsda', logFunc);

const firstWordUpperCase = (str, callback) => {
  const wordArr = str.split(' ');
  wordArr[0] = wordArr[0].toUpperCase();
  callback(wordArr.join(' '));
};

const dashInstedOfSpaces = (str) => {
  const wordArr = str.split(' ');
  console.log(wordArr.join('-'));
};

firstWordUpperCase('please put dashes instead of spaces', dashInstedOfSpaces);

firstWordUpperCase("bla bla bla", logFunc);