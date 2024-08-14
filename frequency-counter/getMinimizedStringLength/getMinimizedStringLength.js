/**
 * getMinimizedStringLength - should return the length of the string after removing all the characters that are the same and next to each other
 * @param {string} str
 * @return {number}
 */
// one-liner Set implementation
const getMinimizedStringLength = (str) => new Set(str).size;

// for loop implementation - if only the most closest characters are removed
// const getMinimizedStringLength = str => {
//   if(!str || !str.length) return 0;

//   let resultLength = 1;
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] !== str[i]) resultLength++;
//   }

//   return resultLength;
// }

export default getMinimizedStringLength;
