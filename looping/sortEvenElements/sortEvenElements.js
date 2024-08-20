/**
 * Sort all even numbers in numbers array.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
const sortEvenElements = nums => {
  const evenElements = [];

  for(let num of nums) {
    if (num % 2 === 0) evenElements.push(num);
  }

  evenElements.sort((a, b) => a - b);

  return nums.map(num => {
    if (num % 2 === 0) return evenElements.shift();
    return num;
  })
}

export default sortEvenElements;