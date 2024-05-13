/**
 * getTargetSumIndexes - get indexes those sum will be equal to target sum
 * @param {number[]} numbers 
 * @param {number} sum 
 * @returns {number[]}
 */
export const getTargetSumIndexes = (numbers, sum) => {
  const numbersDiffMap = {};
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const currentEl = numbers[i];
    const currentDiff = sum - currentEl;
    if (numbersDiffMap[currentEl] >= 0) {
      result.push(numbersDiffMap[currentEl], i)
    } else {
      numbersDiffMap[currentDiff] = i;
    }
  }
  return result;
}