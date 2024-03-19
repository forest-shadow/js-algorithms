/**
 * Return the letter difference between two passed in strings
 * @param {string} str1 
 * @param {string} str2 
 * @returns {string}
 */
export const twoStringsDifference = (str1, str2) => {
  const frequencyCounter = new Map();
  
  for (const char of str1) {
    frequencyCounter.set(char, (frequencyCounter.get(char) || 0) + 1);
  }
  for (const char of str2) {
    frequencyCounter.set(
        char,
        frequencyCounter.get(char) ? frequencyCounter.get(char) - 1 :  1
    );
    if(frequencyCounter.get(char) === 0) {
      frequencyCounter.delete(char);
    }
  }
  
  return Array.from(frequencyCounter.keys())[0];
}
