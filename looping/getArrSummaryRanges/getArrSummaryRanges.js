/**
 * getArrSummaryRanges
 * @param {number[]} nums 
 */
export const getArrSummaryRanges = nums => {
  let result = [];
  for(let i = 0, startEl = nums[0]; i < nums.length; i++) {
    if(nums[i] + 1 !== nums[i + 1]) {
      result.push(startEl === nums[i] ? `${startEl}` : `${startEl}->${nums[i]}`);
      startEl = nums[i + 1];
    }
  }
  return result;
}