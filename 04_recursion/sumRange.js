// `sumRange`
// recursively found sum of each element in range from `1` to `num`. Here base case is `num===1`. Returning from recursive function is working like cascade where previous call from the stack wait for response for step-forwarding function call.

function sumRange(num) {
  return num === 1 ? 1 : num + sumRange(num - 1)
}

export default sumRange