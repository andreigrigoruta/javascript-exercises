const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  // let sum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }
  // return sum;

  // let sum = 0;
  // for (item of array) {
  //   sum += item;
  // }
  // return sum;

  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  // let multiplication = 1;
  // for (item of array) {
  //   multiplication *= item;
  // }
  // return multiplication;

  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function (number, power) {
  // let result = 1;
  // for (let i = 0; i < power; i++) {
  //   result *= number;
  // }
  // return result;

  return Math.pow(number, power);
};

const factorial = function (number) {
  if (number === 0) return 1;
  let product = 1;
  for (let i = 1; i <= number; i++) {
    product *= i;
  }
  return product;
};

// const recursiveFactorial = function(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial (n-1);
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
