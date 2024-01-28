let eqArrays = function(arr1, arr2) {
  let string1 = arr1.toString();
  let string2 = arr2.toString();
  return string1 === string2;
};

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


let without = function(selection, removal) {
  let newSelection = selection.slice();

  for (let i = 0; i < removal.length; i++) {
    let indexToRemove = newSelection.indexOf(removal[i]);

    if (indexToRemove !== -1) {
      newSelection.splice(indexToRemove, 1);
    }
  }

  return newSelection;
};
assertArraysEqual(without([1, 4, 2, 3], [2]), [1, 4, 3]); // Test a pass
assertArraysEqual(without([1, 2, 3, 4], [2]), [1, 2, 4]); //Test a fail

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);