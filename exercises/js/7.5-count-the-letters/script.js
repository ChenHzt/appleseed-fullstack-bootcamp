const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];
const countLetters = (arr) => {
  const letters = arr.join('').toLowerCase();
  console.log(letters);
  const lettersDict = {};
  for (const letter of letters) {
    console.log(letter);
    if (lettersDict[letter] === undefined) lettersDict[letter] = 1;
    else lettersDict[letter]++;
  }
  return lettersDict;
};

console.log(countLetters(array));
