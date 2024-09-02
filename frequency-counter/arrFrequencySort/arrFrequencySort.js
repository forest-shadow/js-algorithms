/**
 * Sort input array by frequency of it's elements
 * @param {number[]} nums
 * @return {number[]}
 */
const arrFrequencySort = nums => {
  const lookup = {};
  for(let num of nums) {
    if (lookup[num]) lookup[num]++;
      else lookup[num] = 1;
  }
  return nums.sort((a, b) => (lookup[a] - lookup[b]) || (b - a))
}

export default arrFrequencySort;