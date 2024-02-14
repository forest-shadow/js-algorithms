export const getTargetSumIndexes = (nums, targetSum) => {
  const state = {};
  for(let i = 0; i <= nums.length; i++) {
    const current = nums[i];
    const currentDiff = targetSum - current;
    if(state[current] >= 0) return [state[current], i]
      else state[currentDiff] = i;
  }
}