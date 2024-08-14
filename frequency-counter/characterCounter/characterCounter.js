/**
 * `charCounter` creates counter object for passed-in string.
 * @param str
 * @returns {{}} - string's counter object
 */
const charCounter = str => {
  const counter = {};

  for(let char of str) {
    const currentChar = char.toLowerCase();
    const charCode = currentChar.charCodeAt(0);
    // lowercase letters ACSII codes check
    if (charCode >= 97 && charCode <= 122) {
    // or
    // slower, but straightforward check
    // if(RegExp(/[a-z]/).test(currentChar)) {
      if(counter[currentChar]) counter[currentChar]++;
      else counter[currentChar] = 1;
    }
  }

  return counter;
}

export default charCounter;