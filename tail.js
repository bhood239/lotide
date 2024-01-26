const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

// Test code 1
const words = ['yes', 'no', 'maybe'];

tail(words);
assertEqual(words.length, 3);

// Test code 2
let newWords = tail(words);
assertEqual(words.length, newWords.length);

// Test code 3
let test3 = ['one'];
assertEqual(tail(test3), 1);

// Test code 4
let test4 = [];
assertEqual(tail(test4), 1);