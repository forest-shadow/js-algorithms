# Searching Algorithms

# Linear Search

Linear Search is about searching in array.

> **Linear Search** — given an array, the simplest way to search for an value is to look at every element and check if it's the value we want.
- this fn accepts an array and a value
- loop through entire array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- if the value is never found, return `-1`

Time Complexity of Linear Search is `O(n)`.

This approach is actually not bad in case if we got array of unordered values. But when we got sorted list, there are a better ways to implement search.

There are many different search methods on arrays in JS to implement Linear Search:

- `indexOf`
- `includes`
- `find`
- `findIndex`

Linear Search also can be implemented as from start of the array so from the end of the array. So, main sign of Linear Search is processing one list item in time, e.g. checking one by one.

# Binary Search

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

# Naive String Search
Here we talking about searching substring in string. 

- Suppose you want to count the number of times a smaller string appears in a longer string
- A straightforward approach involves checking pairs of characters individually

Naive String Search

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- return the count