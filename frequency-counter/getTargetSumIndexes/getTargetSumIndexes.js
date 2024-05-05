export const getTargetSumIndexes = (numbers, sum) => {
  const numbersDiffHash = {};
  for(let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const currentNumDiff = sum - currentNum;
    if(numbersDiffHash[currentNum] >= 0) {
      return [numbersDiffHash[currentNum], i]
    } else {
      numbersDiffHash[currentNumDiff] = i;
    }
  }
}
