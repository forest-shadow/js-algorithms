/**
 * `sameSquared` checks if passed-in second array consists of the same elements as first one, raised to the second power.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {boolean}
 */
const sameSquared = (nums1, nums2) => {
  if (nums1.length !== nums2.length) return false;
  const nums1Lookup = {};
  const nums2Lookup = {};

  for(let num of nums1) {
    nums1Lookup[num] = (nums1Lookup[num] || 0) + 1;

    // or
    // if(nums1Lookup[num]) {
    //   nums1Lookup[num]++;
    // } else {
    //   nums1Lookup[num] = 1;
    // }
  }
  for(let num of nums2) {
    nums2Lookup[num] = (nums2Lookup[num] || 0) + 1;
  }

  for(let key in nums1Lookup) {
    if(
      !nums2Lookup[Number(key) ** 2] ||
      nums2Lookup[Number(key) ** 2] !== nums1Lookup[key]
    ) return false;
  }

  return true;
}

export default sameSquared;