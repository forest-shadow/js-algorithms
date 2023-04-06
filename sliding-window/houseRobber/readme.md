# House robber

### Description
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

### Implementation details

- this task could be resolving using fast/lagging pointers sliding window approach: slow pointer is referencing one or two indices behind the fast pointer keeping track current maximum amount of gold.

```js
rob()                     // 0
rob([])                   // 0
rob([5])                  // 5
rob([1, 8, 3, 7, 9, 10])  // 25
rob([1, 2, 3, 1])         // 4
rob([2, 7, 9, 3, 1])      // 12
```