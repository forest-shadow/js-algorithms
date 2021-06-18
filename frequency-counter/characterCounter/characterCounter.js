/**
 * `charCounter` creates counter object for passed-in string.
 * @param str
 * @returns {{}} - string's counter object
 */
const charCounter = str => {
  const counter = {};
  for (let currentChar of str) {
    const char = currentChar.toLowerCase();

    if(/[a-z0-9]/.test(char)) {
      if (counter[char]) counter[char]++;
        else counter[char] = 1;
    }
  }
  return counter;
}

export default charCounter;