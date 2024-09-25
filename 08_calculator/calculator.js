const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let somme = 0;
  let i = 0;
  if (array.length === 0) {
    return somme;
  } else {
    for (i = 0; i < array.length; i++) {
      somme += array[i];
    }
    return somme;
  }

};

const multiply = function(array) {
  let result = 1;
  for (i = 0; i < array.length; i++) {
    result *= array[i]
  }
  return result;
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else if (num > 0) {
    let i = 1;
    let fact = 1;
    while (i <= num) {

      fact *= i
      ++i
    }
    return fact;
  }
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
