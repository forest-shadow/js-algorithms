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