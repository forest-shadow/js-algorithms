/**
 * `isAnagram` checks if passed-in strings are anagram of each other
 * @param str1
 * @param str2
 * @returns {boolean}
 */
const isAnagram = (str1, str2) => {
  if(!str1.length && !str2.length) return true;
  if(str1.length !== str2.length) return false;
  const str1Counter = {};

  for(let letter of str1) {
    if(str1Counter[letter]) str1Counter[letter]++;
      else str1Counter[letter] = 1;
  }

  for(let letter of str2) {
    if(str1Counter[letter]) str1Counter[letter]--;
      else return false;
  }

  return true;
}

export default isAnagram;