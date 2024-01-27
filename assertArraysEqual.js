const assertArraysEqual = function(actual, expected) {
  let string1 = actual.toString();
  let string2 = actual.toString();
 
  if (string1 === string2) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);