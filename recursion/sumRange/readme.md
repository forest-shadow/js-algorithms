# `sumRange`

---

Recursively found sum of each element in range from `1` to the  `num`. Here base case is `num === 1`. 

Returning from recursive function is working like cascade where previous call from the stack wait for response for step-forwarding function call.

```js
sumRange(5)  // 15
sumRange(4)  //10
```