# The sameSquared squared

### Description

Write a function called `sameSquared`, which accepts two arrays. The function should return `true` if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the sameSquared. Order is have no sense here.

### Implementation Details

- time complexity of solution should be `O(N)`

```js
sameSquared([1,2,3], [4,1,9])    // true
sameSquared([1,2,3], [1,9])      // false
sameSquared([1,2,1], [4,4,1])    // false
```