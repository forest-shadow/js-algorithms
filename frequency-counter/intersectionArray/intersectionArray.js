/**
 * intersectionArray - return array of intersected elements
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number[]|null}
 */
const intersectionArray = (nums1, nums2) => {
  if (!nums1.length || !nums2.length) return null;
  const intersections = new Set();
  const nums1Lookup = {};

  for (let num of nums1) {
    if (!nums1Lookup[num]) nums1Lookup[num] = true;
  }

  for(let num of nums2) {
    if (nums1Lookup[num]) intersections.add(num);
  }

  return Array.from(intersections).sort();
}

export default intersectionArray;