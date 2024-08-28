/**
 * Sort all even numbers in numbers array.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
const sortEvenElements = nums => {
  const evenNumbers = nums.filter(num => !(num % 2)).sort((a, b) => a - b);
  return nums.map(num => {
    if (num % 2) return num;
      else return evenNumbers.shift();
  });
}

export default sortEvenElements;