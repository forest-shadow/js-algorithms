/**
 * sumRange - return sum from 1 to `num`
 * @param {number} num 
 * @returns {number}
 */
export const sumRange = (num) => {
  return num === 1 ? 1 : num + sumRange(num - 1);
}

