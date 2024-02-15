const assertEqual = require(`../assertEqual`)
const tail = require(`../tail`);

const words = ['yes', 'no', 'maybe'];

//testing that assertEqual is working
tail(words);
assertEqual(words.length, 3);

// Test code 1 - fail
let newWords = tail(words);
assertEqual(words.length, newWords.length);

// Test code 2 - pass
assertEqual(words.length - 1, newWords.length);

// Test code 3 - fail
let test3 = ['one'];
assertEqual(tail(test3), 1);

// Test code 4 - pass
let test4 = [];
assertEqual(tail(test4).length, 0);