let eqArrays = function(arr1, arr2) {
  let string1 = arr1.toString();
  let string2 = arr2.toString();
  return string1 === string2;
};

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2) == true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 4, 3], [1, 2, 3]);

