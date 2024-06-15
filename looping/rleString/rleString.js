/**
 * rleString - returns rte string of the provided string
 * @param {string} str 
 * @returns {string}
 */
export const rleString = (str) => {
  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + (count > 1 ? count : '');
      count = 1;
    }
  }

  return result;
}
