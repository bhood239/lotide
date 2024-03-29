const assertEqual = require('./assertEqual');

const findKeyByValue = function(testObject, valueToFind) {
  let result = undefined;

  const keys = Object.keys(testObject);
  const values = Object.values(testObject);

  for (let i = 0; i < values.length; i++) {
    if (values[i] === valueToFind) {
      result = keys[i];
      break;
    }
  }
  return result;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sciFi"); //set to fail
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");

module.exports = findKeyByValue;