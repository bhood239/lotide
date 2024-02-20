const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};


const result2 = countLetters("Why is the earth round");

assertEqual(result2["e"], 2);
assertEqual(result2["h"], 3);

module.exports = countLetters;