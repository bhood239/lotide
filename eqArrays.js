const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(arr1, arr2) {
  let string1 = arr1.toString();
  let string2 = arr2.toString();
  return string1 === string2;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);