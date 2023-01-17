// `exp`
// Write `exp` recursive function that raises given number to specified power
const exp = (number, power) => power ? number * exp(number, power - 1) : 1;
export default exp;
