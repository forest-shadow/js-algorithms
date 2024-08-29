/**
 * Return max sum of the `n` consecutive elements from the array
 * @param {number[]} nums 
 * @param {number} n 
 * @returns {number|null}
 */
const maxSubarraySum = (nums, n) => {
  if (nums.length < n) return null;

  let maxSum = 0;
  let nextSum = 0;

  // find sum of the initial window
  for (let i = 0; i < n; i++) {
    maxSum += nums[i];
  }

  nextSum = maxSum;

  // move window by 1 element on each iteration
  for (let i = n; i < nums.length; i++) {
    // calculate sum of the next window elements
    nextSum = nextSum - nums[i - n] + nums[i];
    maxSum = Math.max(maxSum, nextSum);
  }

  return maxSum;
}

export default maxSubarraySum;