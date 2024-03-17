/**
 * Return a string that contains all the characters of word1 and word2 in alternating order
 * @param {string} word1 
 * @param {string} word2
 * @return {string}
 */
export const mergeStringsAlternately = (word1, word2) => {
  let result = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i]
    if (i < word2.length) result += word2[i]
  }
  return result;
};

const mergeAlternatelyNaive = (word1, word2) => {
  const result = word1.split('').reduce((acc, char, i) => {
      if (word1[i]) acc = acc.concat(word1[i])
      if (word2[i]) acc = acc.concat(word2[i])
      return acc
  }, '')
  return word1.length > word2.length ? result : result.concat(word2.substring(word1.length));
};
