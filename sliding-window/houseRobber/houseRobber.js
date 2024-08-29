/**
 * Return max sum of not adjacent elements
 * @param {number[]} nums 
 * @returns {number}
 */
const rob = nums => {
  if (!nums || !nums.length) return 0;
  if (nums.length === 1) return nums[0];
  let result = [];

  result[0] = nums[0];
  result[1] = Math.max(nums[0], nums[1]);
  
  for (let i = 2; i < nums.length; i++) {
    result[i] = Math.max(result[i - 1], result[i - 2] + nums[i]);
  }

  return result[result.length - 1];
}

export default rob;