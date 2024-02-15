const assert = require('chai').assert;
const tail = require(`../tail`);

describe("#tail", () => {
  it("returns ['no', 'maybe'] for ['yes', 'no', 'maybe']", () => {
    assert.deepEqual(tail(['yes', 'no', 'maybe']), ['no', 'maybe']);
  });
  it("returns an empty string for an empty string", () => {
    assert.deepEqual(tail(['fairmont', 'chateau', 'whistler']), ['chateau', 'whistler']);
  });
});