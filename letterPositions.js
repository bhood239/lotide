let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").l, [2, 3]);

assertArraysEqual(letterPositions("all time fall time").l, [1, 2, 11, 12]);