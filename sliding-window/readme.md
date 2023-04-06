# Sliding Window pattern

## Description
> Sliding window - subset of the dynamic programming.

* This pattern involves creating a <b>window</b> which can either be an array or number from one position to another.
* Depending on a certain condition, the widow either increases or closes (and a new window is created)

### How to identify it?
- The problem will involve a data structure that is ordered and iterable like an array or a string
- You are looking for some subrange in that array/string, like a longest, shortest or target value.
- There is an apparent naive or brute force solution that runs in $O(N^2)$, $O(2^n)$  or some other large time complexity.

### Types of Sliding Window
1. **Fast/Slow**

    These ones have a fast pointer that grows your window under a certain condition.

    It will also have a slow pointer, that shrinks the window. Once you find a valid window with the fast pointer, you want to start sliding the slow pointer up until you no longer have a valid window.

2. **Fast/Catchup**

    This is very similar to the first kind, except, instead of incrementing the slow pointer up, you simply move it up the fast pointer’s location and then keep moving the fast pointer up. It sort of “jumps” to the index of the fast pointer when a certain condition is met.

3. **Fast/Lagging**

    Slow pointer is referencing one or two indices behind the fast pointer and fast pointer keeping track of some choice you’ve made.

4. **Front/Back**

    One pointer on the front and second one on the back, both moving towards each other.

## Challenges

- [House robber](https://github.com/forest-shadow/js-algorithms/tree/main/sliding-window/houseRobber)
- [Maximum subarray sum](https://github.com/forest-shadow/js-algorithms/tree/master/sliding-window/maxSubarraySum)