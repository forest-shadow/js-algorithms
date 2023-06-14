/**
 * `charCounter` creates counter object for passed-in string.
 * @param str
 * @returns {{}} - string's counter object
 */
const charCounter = str => {
  const counter = {};
  for (let currentChar of str) {
    const charIndex = currentChar.toLowerCase();

    if(/[a-z0-9]/.test(charIndex)) {
      if (counter[charIndex]) counter[charIndex]++;
        else counter[charIndex] = 1;
    }
  }
  return counter;
}

export default charCounter;