# rteString

---

Function `rle` implements Run-Length Encoding (RLE) for a given string.

Given a string containing the letters A-Z:
"AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBB" it should return a string in the form: "A4B3C2XYZD4E3F3A6B28"

Notes:
1. If a character appears only once, it remains unchanged.
2. If a character appears more than once, the number of repetitions is added to it.

```js
rleString('A'); // Output: A
console.log(rle('AAAB')); // Output: A3B
console.log(rle('ABCCC')); // Output: ABC3
console.log(rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBB")); // Output: A4B3C2XYZD4E3F3A6B28
```
