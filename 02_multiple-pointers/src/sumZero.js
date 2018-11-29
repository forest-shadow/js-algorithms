// ## 01. Zero sum pair from sorted array
// Write a function called sumZero which accepts a sorted< array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exits.

// sumZero([-3,-2,-1,0,1,2,3])     // [-3,3]
// sumZero([-2,0,1,3])             // undefined
// sumZero([1,2,3])                // undefined

// Naive solution based on looping over each element of array. For each iteration will be started another loop for checking sum of current element with each of other remaining elements.
// Time Complexity - O(N^2)
// Space Complexity - O(1)
function sumZeroNaive (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// Time complexity - O(N)
// Space complexity - O(1)
export default function sumZero (arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}