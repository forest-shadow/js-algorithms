/**
 * getTargetSumIndexes - get indexes those sum will be equal to target sum
 * @param {number[]} nums 
 * @param {number} sum 
 * @returns {number[]}
 */
const getTargetSumIndexes = (nums, sum) => {
  const result = [];
  const diffLookup = {};

  for(let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    const curDiff = sum - curNum;
    if (diffLookup[curNum] >= 0) result.push(diffLookup[curNum], i);
      else diffLookup[curDiff] = i;
  }

  return result;
}

export default getTargetSumIndexes;