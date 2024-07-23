// `arrSum`
// Write recursive function to compute the sum of integers array
/**
 * 
 * @param {number[]} param0 
 * @returns {number}
 */
export const arrSum = ([head, ...tail]) => head ? head + arrSum(tail) : 0;