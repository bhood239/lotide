let eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  } else
    for (const key of keys2) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    } return true;

};

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