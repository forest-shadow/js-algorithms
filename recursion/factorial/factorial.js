// `factorial`
// returns `n` factorial
const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;

export default factorial;
