/*
Given an array of strings, sort them in the order of incresing lengths.
If two strings have the same length, their relative order must be the same as in the initial array.

Example:

inputArray = ["abc", "", "aaa", "a", "zz"]

expected output sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]
*/

function sortByLength(strs) {
  return strs.sort((a, b) => a.length - b.length)
}


//Test Suite