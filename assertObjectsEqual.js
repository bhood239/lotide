const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const suitObject = {color: "blue", size: "large", piece: "3"};
const anotherSuitObject = {size: "large", piece: "3", color: "blue"};
const dressObject = {color: "red", size: "large", design: "flowers"};
assertObjectsEqual(suitObject, anotherSuitObject); //test for true
assertObjectsEqual(suitObject, dressObject); //test for false

module.exports = assertObjectsEqual;