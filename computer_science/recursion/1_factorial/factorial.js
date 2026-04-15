const factorial = function (n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));

// Do not edit below this line
module.exports = factorial;
