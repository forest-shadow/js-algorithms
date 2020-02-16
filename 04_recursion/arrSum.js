// `arrSum`
// Write a JavaScript program to compute the sum of an array of integers
const arrSum = arr => (arr.length > 1 ? arr.pop() + arrSum(arr) : arr[0]);
export default arrSum;
