const assertEqual = require(`../assertEqual`)

const assert = require('chai').assert;
const tail = require(`../tail`);

describe("#tail", () => {
  it("returns ['no', 'maybe'] for ['yes', 'no', 'maybe']", () => {
    const words = ['yes', 'no', 'maybe'];
    let newWords = tail(words);
    assert.strictEqual(words.length - 1, newWords.length);
  });
  it("returns an empty string for an empty string", () => {
    const empty = [];
    assert.strictEqual(tail(empty).length, 0);
  });
});