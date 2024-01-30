const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(countLetters("Ben Hood"));

let result2 = countLetters("Why is the earth round");

assertEqual(result2["e"], 2);
assertEqual(result2["h"], 3);