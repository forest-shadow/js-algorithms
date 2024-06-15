/**
 * getMinimizedStringLength - should return the length of the string after removing all the characters that are the same and next to each other
 * @param {string} str
 * @return {number}
 */
// one-liner Set implementation
export const getMinimizedStringLength = (str) => new Set(str).size;

// for loop implementation - if only the most closest characters are removed
// export const getMinimizedStringLength = (str) => {
//   let result = str;
//   for(let i = 1; i < str.length; i++) {
//       if(str[i] === str[i - 1]) result = result.substring(1);
//   }
//   return result.length;
// };
