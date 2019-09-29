// `factorial`
// returns `n` factorial
function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1)
}

export default factorial