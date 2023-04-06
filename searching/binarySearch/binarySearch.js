// Binary Search function:

// - this fn accepts a sorted array and a value you searching (for this example we will working with numbers only)
// - create a left pointer at the start of the array, and a right pointer at the end of array
// - while the left pointer comes before the right pointer:
//    - create a pointer in the middle
//    - if you find the value you want, return the index
//    - if the value is too small, move the left pointer up
//    - if the value is too large, move the right pointer down
// - if you never find the value, return -

// Big O of Binary Search
// Worst and Average Case — `O(log n)`
// Best Case — `O(1)`

function binarySearch(arr, needle) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  while (arr[middle] !== needle && start <= end) {
    if(needle < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }

  return arr[middle] === needle ? middle : -1
}

export default binarySearch