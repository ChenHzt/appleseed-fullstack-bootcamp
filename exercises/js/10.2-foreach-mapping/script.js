const doubleValues = (array) => {
  const newArray = array.map((element) => element * 2);
  return newArray;
};

console.log(doubleValues([1, 2, 3, 4]));

const onlyEvenValues = (arr) => {
  const newArray = [];
  arr.forEach((element) => {
    if (element % 2) newArray.push(element);
  });
  return newArray;
};

console.log(onlyEvenValues([1, 2, 3, 4, 5, 6]));

const showFirstAndLast = (arr) => {
  const result = [];
  arr.forEach((element, index, originalArray) => {
    if (
      (index === originalArray.length - 1 || index === 0) &&
      typeof element === 'string'
    )
      result.push(element);
  });
  return result;
};

console.log(showFirstAndLast([1, '2', 3, 'str']));

const vowelCount = (str) => {
  const lowerStr = str.toLowerCase();
  const arr = lowerStr.split('');
  const result = {};
  arr.forEach((element) => {
    // console.log(element);
    switch (element) {
      case 'o':
      case 'u':
      case 'i':
      case 'e':
      case 'a':
        result[element] = result[element] ? result[element] + 1 : 1;
        break;
      default:
    }
  });
  return result;
};

console.log(vowelCount('iammgeeeu'));

const capitalize = (str) => {
  const t = str.split('').map((letter) => letter.toUpperCase());
  return t.join('');
};

console.log(capitalize('sdervDvG'));

const shiftLetters = (str) =>
  str
    .split('')
    .map((letter) => {
      if (letter === 'a') return 'z';
      return String.fromCharCode(letter.charCodeAt(0) - 1);
    })
    .join('');

console.log(shiftLetters('abcdef'));

const swapCase = (str) =>
  str
    .split(' ')
    .map((word, index) => (index % 2 ? capitalize(word) : word))
    .join(' ');

console.log(swapCase('abcdef dghedg jdhfuihf uewdui'));

