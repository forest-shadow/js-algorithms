/**
 * Return sorted by frequence anagrams from the given workds array
 * @param {string[]} words 
 * @returns {string[]}
 */
const getSortedAnagrams = words => {
  const anagramLookup = {}
  for(let word of words) {
    const sortedWord = word.toLowerCase().split('').sort().join('')

    if(anagramLookup[sortedWord]) {
      anagramLookup[sortedWord] += 1
    } else {
      anagramLookup[sortedWord] = 1
    }
  }

  return Object.entries(anagramLookup).sort((a, b) => b[1] - a[1]).map(item => item[0]);
}

export default getSortedAnagrams;