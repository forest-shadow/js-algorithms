# Zero summary pair from sorted array

### Description

Write a function called **sumZero** which accepts a **sorted** array of integers. The function should find the <b>first</b> pair where the sum is `0`. Return an array that includes both values that sum to zero or `undefined` if a pair does not exits.

### Acceptance Criteria

- Time complexity - `O(N)`
- Space complexity - `O(1)`

```js
sumZero([-3,-2,-1,0,1,2,3])     // [-3,3]
sumZero([-3,-2,-1,0,1,2,4])     // [-2,2]
sumZero([-2,0,1,3])             // undefined
sumZero([1,2,3])                // undefined
```