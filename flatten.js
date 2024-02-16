const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (!Array.isArray(current)) {
      flattened.push(current);
      continue;
    }
    for (let j = 0; j < current.length; j++) {
      flattened.push(current[j]);
    }
  }
  return flattened;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //Test 1 - pass

assertArraysEqual(flatten([[1], 2, 3, [4], [5, 6]]), [1, 2, 3, 4, 5, 6]); //Test 2 - pass

assertArraysEqual(flatten([1, 2, [3, 4], 5, 6]), [1, 2, [3, 4], 5, 6]); //Test 3 - fail

module.exports = flatten;