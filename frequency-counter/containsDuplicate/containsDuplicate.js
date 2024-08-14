/**
 * Checks if provided number array contains duplicate elements
 * @param {number[]} nums 
 * @returns {boolean}
 */
const containsDuplicate = nums => {
  if (!nums || !nums.length) return false;
  const lookup = {};

  for(let num of nums) {
    if (lookup[num]) return true;
      else lookup[num] = true;
  }
  
  return false;
}

export default containsDuplicate;