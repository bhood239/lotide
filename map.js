let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else 
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      };
      }
      return true
    };

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callbackFn) {
  const results = [];

  for (const item of array) {
    results.push(callbackFn(item));
  }
 
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const test1 = map(words, word => word === "major");
assertArraysEqual(test1, [false, false, false, true, false]);

const nums = [1, 2, 3, 4, 5];

const test2 = map(nums, num => num * 2);
assertArraysEqual(test2, [2, 4, 6, 8, 10]);

const test3 = map(nums, num => num / 2);
assertArraysEqual(test3, [0.5, 1, 1.5, 2, 2.5]);