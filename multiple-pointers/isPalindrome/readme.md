# Palindrome Checker

## Description
The task is to implement a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

## Implementation Details

- The function should return `true` if the input string is a palindrome, and `false` otherwise.
- The function uses two pointers to compare characters from the beginning and the end of the string, moving towards the center.
- The comparison is case-sensitive and does not ignore spaces or punctuation.

```js
isPalindrome("racecar")     // true
isPalindrome("hello")       // false
isPalindrome("ABBA")        // true
isPalindrome("TART")        // false
isPalindrome("") 
```

## Concepts Covered

- **Two-Pointer Technique**: The function uses two pointers, `left` and `right`, to traverse the string from both ends towards the center, comparing characters at each step.
- **String Comparison**: The function directly compares characters at the `left` and `right` indices to determine if they are the same.
- **Looping Constructs**: A `while` loop is used to iterate over the string until the `left` pointer is no longer less than the `right` pointer.

## Implementation Notes

- The function initializes two pointers, `left` at the start of the string and `right` at the end.
- It iterates over the string, comparing characters at the `left` and `right` indices.
- If any pair of characters do not match, the function returns `false`.
- If all characters match, the function returns `true`.
