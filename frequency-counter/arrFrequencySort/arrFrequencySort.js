/**
 * Sort input array by frequency of it's elements
 * @param {number[]} nums
 * @return {number[]}
 */
const arrFrequencySort = nums => {
  const freqMap = {};

  for(let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  return nums.sort((a, b) => (freqMap[a] - freqMap[b]) || (b - a));
}

export default arrFrequencySort;