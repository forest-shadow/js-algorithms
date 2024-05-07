/**
 * canJump - should return true if last element is reachable
 * @param {number[]} numbers 
 * @returns {boolean}
 */
export const canJump = (numbers) => {
  if(!numbers || !numbers.length) return false;

  let lastReachableIndex = numbers.length - 1;
  for(let i = lastReachableIndex - 1; i >= 0; i--) {
    if(i + numbers[i] >= lastReachableIndex) lastReachableIndex = i;
  }
  return lastReachableIndex === 0;
}