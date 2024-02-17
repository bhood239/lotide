const assertArraysEqual = require('./assertArraysEqual');


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
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;