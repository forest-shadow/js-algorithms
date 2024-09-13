/**
 * Return the letter difference between two passed in strings
 * @param {string} str1 
 * @param {string} str2 
 * @returns {string}
 */
const twoStringsDifference = (str1, str2) => {
  const charMap = new Map()
  for(let char of str1) {
    charMap.set(char, (charMap.get(char) || 0) + 1)
  }
  console.log(charMap)
  for(let char of str2) {
    charMap.set(char, charMap.get(char) ? charMap.get(char) - 1 : 1)
    if(charMap.get(char) === 0) charMap.delete(char);
  }
  return Array.from(charMap.keys())[0]
}

export default twoStringsDifference;
