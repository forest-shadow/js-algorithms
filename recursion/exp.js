// `exp`
// Write a function that raises given value to specified power
const exp = (value, pow) => (pow > 0 ? value * exp(value, pow - 1) : 1);
export default exp;
