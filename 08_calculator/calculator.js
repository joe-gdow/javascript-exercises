const add = function(x,y) {
	let sum = x + y;
  return sum
};

const subtract = function(x, y) {
	const sum = x - y;
  return sum
};

const sum = function(...args) {
  let finalSum = 0;
  for (x of args) {
    if (typeof x === 'object') {
      for (let i = 0; i < x.length; i++) {
        finalSum += x[i]
      }
      return finalSum
    } 
    finalSum += x;
  }
  return finalSum
};

const multiply = function(...args) {
  let product = 1;
  for (x of args) {
    if (typeof x === 'object') {
      for (let i = 0; i < x.length; i++) {
        product *= x[i]
      }
      return product
    } 
    product *= x;
  }
  return product
};

const power = function(x, y) {
  let product = 1;
  for (let i = 1; i <= y; i++)	{
    product *= x; 
  }
  return product
};

const factorial = function(x) {
	let product = 1;
  while (x > 0) {
    product *= x;
    x--;
  }
  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
