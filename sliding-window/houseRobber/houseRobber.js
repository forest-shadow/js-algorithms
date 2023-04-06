export const rob = nums => {
  if(!nums || nums.length === 0) {
    return 0;
  }

  if(nums.length === 1) {
    return nums[0];
  }

  let total = [];
  total[0] = nums[0];
  total[1] = Math.max(nums[0], nums[1]);

  for(let i = 2; i < nums.length; i++) {
    total[i] = Math.max(total[i - 1], (total[i - 2] + nums[i]));
  }
  return total[total.length - 1]
}