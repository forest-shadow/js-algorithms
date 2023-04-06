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