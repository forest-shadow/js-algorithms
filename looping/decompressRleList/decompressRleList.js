/**
 * decompressRLElist - should decompress providede rle array
 * @param {number[]} nums
 * @return {number[]}
 */
export const decompressRLElist = (nums) => {
  const result = [];

  for(let i = 1; i < nums.length; i += 2) {
      result.push(...new Array(nums[i - 1]).fill(nums[i]));
  }

  return result;
};
