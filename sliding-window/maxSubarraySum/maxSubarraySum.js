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
  // calculate sum of first `n` elements — initialize sliding window
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum
  // go through the rest of array's elements moving sliding window element by element to the array's end
  for (let i = num; i < arr.length; i++) {
    // delete from `tempSum` first element from previous sliding window position
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}