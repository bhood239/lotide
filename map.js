const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callbackFn) {
  const results = [];
  for (const item of array) {
    results.push(callbackFn(item));
  }
  return results;
};

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

module.exports = map;