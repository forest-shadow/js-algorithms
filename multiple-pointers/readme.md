# Multiple Pointers Pattern

* Creating <b>pointers</b> or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
* <b>Very</b> efficient for solving problems with minimal space complexity as well.

## 01. Zero sum pair from sorted array
Write a function called <b>sumZero</b> which accepts a <b>sorted</b> array of integers. The function should find the <b>first</b> pair where the sum is `0`. Return an array that includes both values that sum to zero or `undefined` if a pair does not exits.

```js
sumZero([-3,-2,-1,0,1,2,3])     // [-3,3]
sumZero([-2,0,1,3])             // undefined
sumZero([1,2,3])                // undefined
```

## 02. Array's Unique Values Counter
Implement a function called <b>countUniqueValues</b>, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array but it always be sorted.

```js
countUniqueValues([1,1,1,1,1,2])                    // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])       // 7
countUniqueValues([])                               // 0
countUniqueValues([-2,-1,-1,0,1])                   // 4
```