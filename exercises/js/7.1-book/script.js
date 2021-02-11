const book = {
  name: `Harry Potter and The Philosopher's Stone`,
  auther: 'JK Rowling',
  publishingYear: 1997,
  isPartOfSeries: true,
  numOfBooksInSeries: 7,
};

const getBookDetails = (bookObj) =>
  `The book ${bookObj.name} was written by ${bookObj.auther} in the year ${bookObj.publishingYear}`;

console.log(getBookDetails(book));
