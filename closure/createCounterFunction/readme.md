# createCounterFunction

---

Given an integer `init`, return a `counter` function. This `counter` function initially returns `init` value and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

```js
const counter = createCounterFunction(10)
counter() // 10
counter() // 11
counter() // 12
```