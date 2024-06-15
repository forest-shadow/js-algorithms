/**
 * isMonotonicArray - check if provided nums array is monotonic
 * @param {number[]} nums 
 * @returns {boolean}
 */
const Direction = {
  'NONE': 0,
  'INCREASING': 1,
  'DECREASING': -1
}
export const isMonotonicArray = (nums) => {
  let isMonotonic = true;
  let currentDirection = Direction.NONE;

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > nums [i - 1]) {
      if(currentDirection === Direction.NONE) {
        currentDirection = Direction.INCREASING;
      } else if (currentDirection !== Direction.INCREASING) {
        isMonotonic = false;
      }
    } else if (nums[i] < nums [i - 1]) {
      if(currentDirection === Direction.NONE) {
        currentDirection = Direction.DECREASING;
      } else if (currentDirection !== Direction.DECREASING) {
        isMonotonic = false;
      }
    }
  }

  return isMonotonic;
}