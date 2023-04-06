# Linear Search

## Description
Linear Search is about searching in array.

> **Linear Search** — given an array, the simplest way to search for an value is to look at every element and check if it's the value we want.
- this fn accepts an array and a value
- loop through entire array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- if the value is never found, return `-1`

Time Complexity of Linear Search is `O(n)`.

This approach is actually not bad in case if we got array of unordered values. But when we got sorted list, there are a better ways to implement search.

There are many different search methods on arrays in JS to implement Linear Search:

- `indexOf`
- `includes`
- `find`
- `findIndex`

Linear Search also can be implemented as from start of the array so from the end of the array. So, main sign of Linear Search is processing one list item in time, e.g. checking one by one.