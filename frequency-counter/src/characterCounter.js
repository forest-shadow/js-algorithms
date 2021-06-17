// String character counter
// Write function that will be retrieve string as parameter and will return object with properties referred to the string's characters and value of these properties will be counter of how much it appears in passed string.
//
// charCount("aaaa")     // {a:4}
// charCount("hello")    // {h:1, e:1, l:2, o:1}


export default function charCount(str) {
  let obj = {}

  for (let char of str) {
    char = char.toLowerCase()

    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++
      } else {
        obj[char] = 1
      }
      // or more elegant syntax
      // obj[char] = ++obj[char] || 1
    }
  }
  return obj
}