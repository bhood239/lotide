const middle = function(array) {
  if (array.length < 3) return []; // returns nothing if the array has 1 or 2 indexes
  

  if (array.length % 2 !== 0)  {
    return [array[(array.length - 1) / 2]]; //push middle element for odd array
  }

  return [array[array.length / 2 - 1], array[array.length / 2]];

};

module.exports = middle;