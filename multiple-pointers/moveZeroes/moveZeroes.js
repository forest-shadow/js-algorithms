/**
 * Return `nums` with with in-place zeroes moved to the end
 * @param {number[]} nums 
 * @returns {number[]}
 */
const moveZeroes = nums => {
  let low = 0;
  let high = low + 1;

  while (high < nums.length) {
    if (nums[low] === 0) {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }
      high++;
    } else {
      low++;
      high++;
    }
  }

  return nums;
}

export default moveZeroes;