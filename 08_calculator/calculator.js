const add = function(a, b) {
  let output = a + b;
  return output;
};

const subtract = function(a, b) {
  let output = a - b;
  return output;
};

const sum = function(items) {
  const inputArray = Array.from(items);
  let output = (0);
  for (i = 0; i < inputArray.length; i++) {
    output = ((output) + (inputArray[i]));
}
  return output;
};

const multiply = function(items) {
  const inputArray = Array.from(items);
  let output = 1;
  for (i = 0; i < inputArray.length; i++) {
    output = ((output) * (inputArray[i]));
  }
  return output;
};

const power = function(a, b) {
	let output = (a ** b);
  return output;
};

const factorial = function(a) {
  if (a === 0) {
    a = 1;
  } else {
    a = a;
  }
  let output = a;
  const factors = [];
  factors[0] = a;
  for (i = 1; i < a; i++) {
    factors[i] = (a - i);
  }
  for (i = 1; i < factors.length; i++) {
    output = (output) * (factors[i]);
  }
  return output;
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
