export const canJump = (arr) => {
  if(!arr || !arr.length) return false;

  let reachableIndex = arr.length - 1;

  for(let i = reachableIndex - 1; i >=0; i--) {
    if(i + arr[i] >= reachableIndex) reachableIndex = i;
  }
  return reachableIndex === 0;
}
