/**
 * Return the letter difference between two passed in strings
 * @param {string} str1 
 * @param {string} str2 
 * @returns {string}
 */
const twoStringsDifference = (str1, str2) => {
  const str1Lookup = new Map();
  for(let char of str1) {
    str1Lookup.set(char, (str1Lookup.get(char) || 0) + 1);
  }
  for(let char of str2) {
    str1Lookup.set(char, str1Lookup.get(char) - 1);
    if (str1Lookup.get(char) === 0) str1Lookup.delete(char);
  }
  return Array.from(str1Lookup.keys())[0]
}

export default twoStringsDifference;
