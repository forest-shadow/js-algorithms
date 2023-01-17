// O(N) solution
const isPrimeNaive = (number) => {
  if(number <= 1) return false;
  for(let i = 2; i < number; i++) {
    if(number % i === 0) return false;
  }
  return true;
}

// O(n^¹/2) solution
function isPrimeAdvanced (num) {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true
}

export { isPrimeNaive, isPrimeAdvanced };