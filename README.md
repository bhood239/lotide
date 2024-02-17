# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bhood239/lotide`

**Require it:**

`const _ = require('@bhood239/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `without(...)`: Takes a given array and given indices and returns a new array without the given indices
* `takeUntil(...)`: Takes a given array and returns the same array up to the point of a given index
* `tail(...)`: Takes a given array and returns the same array minus the first index
* `middle(...)`: Returns the middle item/items of a given array
* `letterPositions(...)`: Returns the positions that a given letter appears in a string
* `head(...)`: Returns the first index in a given array
* `flatten(...)`: Flattens a multidimensional array
* `findKeyByValue(...)`: Returns the key associated with a given value from a given object
* `findKey(...)`: Finds the key that matches a callback function
* `eqObjects(...)`: Determines if 2 objects are equal
* `eqArrays(...)`: Determines if 2 arrays are equal
* `countOnly(...)`: Counts the amount of times that a given index appears in an object when given true
* `countLeters(...)`: Counts the amount of times that a given letter appears in a string
* `assertObjectEqual(...)`: Asserts if an object matches a given expected object
* `assertArraysEqual(...)`: Asserts if an array matches a given expected array
* `assertEqual(...)`: Asserts if a value matches a given expected value