# Frequency counter pattern usage examples

* This pattern uses objects or sets to collect values/frequencies of values.
* This can often avoid the need for nested loops or O(N^2) operations with arrays / strings.

Frequency counter stands from utilization of object like collection of character counters. Each property represents some character and value signifies it's frequency in some array/string. 

## 01. String character counter
Write function that will be retrieve string as parameter and will return object with properties referred to the string's characters and value of these properties will be counter of how much it appears in passed string.

```
charCount("aaaa")     // {a:4}
charCount("hello")    // {h:1, e:1, l:2, o:1}
```

## 02. The `same` squared
Write a function called `same`, which accepts two arrays. The function should return `true` if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. Order is have no sense here.

```
same([1,2,3], [4,1,9])    // true
same([1,2,3], [1,9])      // false
same([1,2,1], [4,4,1])    // false
```

## 03. Anagrams
Given two stings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phase, or name formed by rearranging the letters of another, such as `cinema`, formed from `iceman`.

```
validAnagram('', '')                  // true
validAnagram('aaz', 'zza')            // false
validAnagram('anagram', 'nagaram')    // true
validAnagram('rat', 'car')            // false
validAnagram('awesome', 'awesom')     // false
validAnagram('qwerty', 'qeywrt')      // true
```