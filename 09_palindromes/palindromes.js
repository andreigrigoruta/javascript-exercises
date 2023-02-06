const palindromes = function (word) {
  const wordWithoutSymb = word.toLowerCase().replace(/[\W\s]/g, "");
  return wordWithoutSymb.split("").reverse().join("") === wordWithoutSymb;
};

// Do not edit below this line
module.exports = palindromes;
