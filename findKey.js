const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  let result;

  let keys = Object.keys(object);
  let values = Object.values(object);

  for (let i = 0; i < values.length; i++) {
    if (callback(values[i])) {
      result = keys[i];
      break;
    }
  }
  return result;
};

// const findKey = function (object, callback) {
//   for (const key in object) {
//     if (callback(object[key])) {
//       return object[key]
//     }
//   }
// }

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(test1, "noma");

const test2 = findKey({
  "Duck": { legs: 2 },
  "Dog": { legs: 4},
  "Snake": { legs: 0},
  "Spider": { legs: 8}
}, x => x.legs === 0); // => "Snake"

assertEqual(test2, "Snake");

module.exports = findKey;