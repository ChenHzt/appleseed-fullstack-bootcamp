const book1 = {
  name: `book1`,
  auther1: `auther1`,
  year: 2020,
};
const book2 = {
  name: `book2`,
  auther1: `auther2`,
  year: 2021,
};

const bookUtils = {};
bookUtils.getFirstPublished = (_book1, _book2) =>
  _book1.year < _book2.year ? _book1 : _book2;

bookUtils.setNewEdition = (book, newEditionYear) => {
  book.latestEdition = newEditionYear;
};

bookUtils.setLanguage = (book, language) => (book.language = language);

bookUtils.setTranslation = (book, language, translator) => {
  book.translation = { language, translator };
};

bookUtils.setPublisher = (book, publisherName, location) => {
  book.publisher = { publisherName, location };
};

bookUtils.isSamePublisher = (_book1, _book2) => {
  !!(
    _book1.publisher.publisherName === _book2.publisher.publisherName &&
    _book1.publisher.location === _book2.publisher.location
  );
};


