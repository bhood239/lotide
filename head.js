const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  let i = arr[0];
  return i;
};

assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["ben", "hood", "ben"]), "hood");
assertEqual(head(['yes']), 'yes');
assertEqual(head([]), 1);