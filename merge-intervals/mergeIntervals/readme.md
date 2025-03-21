# Merge Intervals

## Description
Implement a function that takes an array of intervals and merges all overlapping intervals. Each interval is represented as a pair of numbers, where the first number is the start and the second is the end. The function should return an array of the merged intervals.

## Implementation Details

- The function should handle edge cases where the input array is empty or contains only one interval.
- Intervals are assumed to be sorted by their start times. If not, the function should sort them first.
- Overlapping intervals should be merged into a single interval.

```js
mergeIntervals([[1, 3], [2, 4], [5, 7], [6, 8]]) // [[1, 4], [5, 8]]
mergeIntervals([[1, 4], [4, 5]])                 // [[1, 5]]
mergeIntervals([[1, 10], [2, 6], [8, 10], [15, 18]]) // [[1, 10], [15, 18]]
mergeIntervals([[1, 4], [0, 2], [3, 5]])         // [[0, 5]]
```

## Concepts Covered

- **Edge Case Handling**: The function checks for empty or single-element arrays to avoid unnecessary processing.
- **Interval Merging**: It uses a loop to iterate through the intervals, merging them when they overlap.
- **Array Manipulation**: The function uses an array to store the merged intervals and updates it as necessary.

## Implementation Notes

- The function initializes with the first interval and iterates through the rest, checking for overlaps.
- If the current interval overlaps with the next, it merges them by updating the end of the current interval.
- If no overlap is found, the current interval is added to the result array, and the next interval becomes the current one.


