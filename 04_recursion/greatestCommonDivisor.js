// `greatestCommonDivisor`
// Find the greatest common divisor of two positive numbers
const greatestCommonDivisor = (num1, num2) =>
  num2 ? greatestCommonDivisor(num2, num1 % num2) : num1;
export default greatestCommonDivisor;
