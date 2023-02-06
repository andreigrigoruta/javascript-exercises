const getTheTitles = function (books) {
  // let titles = [];
  // for (let book of books) {
  //   titles.push(book.title);
  // }
  // return titles;

  // return books.map((book) => book.title);
  return books.map(({ title }) => title);
};

// Do not edit below this line
module.exports = getTheTitles;
