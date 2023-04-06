# Binary Search

## Description
- is a much faster form of search
- rather than eliminating one element at a time, you can eliminate *half* of the remaining elements at a time
- Binary Search only works on *sorted* arrays!

Main idea in Binary Search is: Divide and Conquer

Binary Search function:
- this fn accepts a sorted array and a value you searching (for this example we will working with numbers only)
- create a left pointer at the start of the array, and a right pointer at the end of array
- while the left pointer comes before the right pointer:
    - create a pointer in the middle
    - if you find the value you want, return the index
    - if the value is too small, move the left pointer up
    - if the value is too large, move the right pointer down
- if you never find the value, return -1

**Big O of Binary Search:**

Worst and Average Case — `O(log n)` 

Best Case — `O(1)`