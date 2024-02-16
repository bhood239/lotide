const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").l, [2, 3]);

assertArraysEqual(letterPositions("all time fall time").l, [1, 2, 11, 12]);

module.exports = letterPositions;