# fizzBuzzGame

---

Given an integer `n`, return a string array answer (1-indexed) where:

* `answer[i] == "FizzBuzz"` if i is divisible by 3 and 5.
* `answer[i] == "Fizz"` if i is divisible by 3.
* `answer[i] == "Buzz"` if i is divisible by 5.
* `answer[i] == i` (as a string) if none of the above conditions are true.

```js
fizzBuzzGame(3);    // ["1","2","Fizz"]
fizzBuzzGame(5);    // ["1","2","Fizz","4","Buzz"]
fizzBuzzGame(15);   // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```