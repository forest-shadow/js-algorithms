// Linear Search

// - this fn accepts an array and a value
// - loop through entire array and check if the current array element is equal to the value
// - If it is, return the index at which the element is found
// - if the value is never found, return `-1`

// Time Complexity of Linear Search is O(n).
function linearSearch(arr, needle) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === needle) return i
  }
  return -1
}

export default linearSearch