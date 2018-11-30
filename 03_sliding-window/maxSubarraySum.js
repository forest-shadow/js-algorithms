// Max consecutive sum of `n` element of array
// Write a function called `maxSubarraySum` which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in array.

// maxSubarraySum([1,2,5,2,8,1,5],2)   // 10
// maxSubarraySum([1,2,5,2,8,1,5],4)   // 17
// maxSubarraySum([4,2,1,6],1)         // 6
// maxSubarraySum([4,2,1,6,2],4)       // 13
// maxSubarraySum([],4)                // null

// naive solution here based on squared loop
// Time Complexity - O(N^2)
function maxSubarraySumNaive (arr, num) {
  if (num > arr.length) {
    return null
  }
  let max = -Infinity
  let temp
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }

  return max
}

// Here comes actual sliding window approach
// Time Complexity - O(N)
export default function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}