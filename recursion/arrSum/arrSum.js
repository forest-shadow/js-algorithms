// `arrSum`
// Write recursive function to compute the sum of integers array
const arrSum = ([head, ...tail]) => head ? head + arrSum(tail) : 0;
export default arrSum;
