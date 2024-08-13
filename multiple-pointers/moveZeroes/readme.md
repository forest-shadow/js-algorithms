# moveZeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

* do this in-place, without making a copy of the array.

```js
moveZeroes([0,1,0,3,12]);  // [1, 3, 12, 0, 0]
// 1. [1, 0, 0, 3, 12] low = 1, high = 2
// 2. [1, 0, 0, 3, 12] low = 1, high = 3
// 3. [1, 3, 0, 0, 12] low = 2, hight = 4
// 4. [1, 3, 12, 0, 0] low = 3, hight = 5, high > nums.length

moveZeroes([0]);           // [0]
```
