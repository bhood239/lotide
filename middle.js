let eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else 
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      };
      }
      return true
    };

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const middle = function(array) {
  let newArr = [];
    if (array.length < 3) {
      return []; // returns nothing if the array has 1 or 2 indexes
    } 
    else if (array.length % 2 !== 0) {
      return [array[(array.length - 1) / 2]]; //push middle element for odd array
    }
    else {
      return [array[array.length / 2 - 1], array[array.length / 2]];
    }
  }

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);