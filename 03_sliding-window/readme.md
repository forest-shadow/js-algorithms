# Sliding window pattern

* This pattern involves creating a <b>window</b> which can either be an array or number from one position to another.
* Depending on a certain condition, the widow either increases or closes (and a new window is created)
* Very useful for keeping track of a subset of data in an array/string etc.

## 01. Max consecutive sum of `n` element of array
Write a function called `maxSubarraySum` which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in array.

```
maxSubarraySum([1,2,5,2,8,1,5],2)   // 10
maxSubarraySum([1,2,5,2,8,1,5],4)   // 17
maxSubarraySum([4,2,1,6],1)         // 6
maxSubarraySum([4,2,1,6,2],4)       // 13
maxSubarraySum([],4)                // null
```
