/**
 * `charCounter` creates counter object for passed-in string.
 * @param str
 * @returns {{}} - string's counter object
 */
export const charCounter = str => {
  const counter = {};
  for (let char of str) {
    const currentChar = char.toLowerCase();
    if(/[a-z]/.test(currentChar)) {
      if (counter[currentChar]) counter[currentChar]++;
        else counter[currentChar] = 1;
    }
  }
  return counter;
}