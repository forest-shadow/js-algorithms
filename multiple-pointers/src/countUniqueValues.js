// Array's Unique Values Counter
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array but it always be sorted.

// countUniqueValues([1,1,1,1,1,2])                    // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])       // 7
// countUniqueValues([])                               // 0
// countUniqueValues([-2,-1,-1,0,1])                   // 4

// Solution based on idea of using 2 markers. j marker search first unique value then increment i marker and place newly founded unique value on i-marker place. So, at the end we can found count of unique elements by i-marker position.
export default function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}