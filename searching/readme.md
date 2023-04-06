# Searching Algorithms

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