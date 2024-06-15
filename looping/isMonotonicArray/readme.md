# isMonotonicArray

---

Write `isMonotonicArray` funciton returning boolean value indicating if provided array is monotonic or not.

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all `i <= j`, `nums[i] <= nums[j]`. An array nums is monotone decreasing if for all `i <= j`, `nums[i] >= nums[j]`.

Given an integer array `nums`, return `true` if the given array is monotonic, or `false` otherwise.

```js
isMonotonicArray([1, 2, 2, 3])      // true
isMonotonicArray([6, 5, 4, 4, 3])   // true
isMonotonicArray([1, 3, 2])         // false
```