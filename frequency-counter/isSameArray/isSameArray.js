/**
 * isSameArray - should check if provided arrays are equal
 * @param {number[]} nums1 
 * @param {number[]} nums2
 * @return {boolean}
 */
const isSameArray = (nums1, nums2) => {
  if (nums1.length !== nums2.length) return false;

  const freqMap = {};

  for(let num of nums1) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  for(let num of nums2) {
    if (freqMap[num]) {
      freqMap[num]--;
    } else {
      return false
    }
  }

  return !Object.entries(freqMap).some(entry => entry[1] > 0);
}

export default isSameArray;