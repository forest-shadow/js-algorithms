// `naiveStringSearch`

// - Loop over the longer string
// - Loop over the shorter string
// - If the characters don't match, break out of the inner loop
// - If the characters do match, keep going
// - If you complete the inner loop and find a match, increment the count of matches
// - return the count
function naiveStringSearch(string, needle) {
  let count = 0
  for(let i = 0; i < string.length; i++) {
    for(let j = 0; j < needle.length; j++) {
      if(string[i+j] !== needle[j]) break;
      if(j === needle.length - 1) count++
    }
  }
  return count
}

export default naiveStringSearch