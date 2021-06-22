# Array's Unique Values Counter

### Description

Implement a function called **countUniqueValues**, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

### Implementation Details

- Solution based on idea of using 2 markers: `j` marker search first unique value, then increment `i` marker and place newly founded unique value on `i`-marker place. So, at the end we can find count of unique elements by i-marker position.
- Counter pointer `i` will always refer to the last unique value.
- Counter pointer's `i` value should represent amount of array's unique values.
```js
countUniqueValues([1,1,1,1,1,2])                    // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])       // 7
countUniqueValues([])                               // 0
countUniqueValues([-2,-1,-1,0,1])                   // 4
```
