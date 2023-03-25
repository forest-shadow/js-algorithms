# Array jumping game: canJump?

### Description
Write a function that given array of non-negative integers will return true if it's possible to reach out to the last array's element by jumping by preceding elements where the element's value describes the longevity of the current possible jump.

### Implementation details

- element's value describing longevity of the next jump

```js
canJump([])                // false
canJump([2, 0, 0])         // true
canJump([2, 3, 1, 1, 4])   // true
canJump([2, 3, 0, 0, 4])   // true
canJump([3, 2, 1, 0, 4])   // false
```