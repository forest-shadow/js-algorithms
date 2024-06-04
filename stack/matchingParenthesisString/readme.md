# Matching Parenthesis String

### Description
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Every close bracket has a corresponding open bracket of the same type.

### Implementation details

* Use a stack of characters.
* When you encounter an opening bracket, push it to the top of the stack.
* When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.

```js
isMatchingParenthesisString('()')     // true
isMatchingParenthesisString('()[]{}') // true
isMatchingParenthesisString('(]')     // false
```
 