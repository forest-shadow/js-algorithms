/**
 * Return the letter difference between two passed in strings
 * @param {string} str1 
 * @param {string} str2 
 * @returns {string}
 */
export const twoStringsDifference = (str1, str2) => {
  const charFrequencyMap = new Map();
  for(let char of str1) {
    charFrequencyMap.set(
      char,
      (charFrequencyMap.get(char) || 0) + 1
    )
  }
  for(let char of str2) {
    charFrequencyMap.set(
      char,
      charFrequencyMap.get(char) ? charFrequencyMap.get(char) - 1 || 0 : 1
    )
    if(charFrequencyMap.get(char) === 0) charFrequencyMap.delete(char)
  }
  return Array.from(charFrequencyMap.keys())[0];
}
