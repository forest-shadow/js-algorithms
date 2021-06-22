# String Character Counter

### Description
Write function which will be retrieve string as parameter and will return it's counter object.

### Implementation details

- counter should be case agnostic
- all characters except latin letters and numbers should not be counted (be avoided)

```js
charCount("aaaa")          // {a:4}
charCount("a^(b4c#@d")     // {a:1, b:1, 4:1, c:1, d:1}
charCount("AaBa%^bCBdE5)") // {a:3, b:3, c: 1, d: 1, e: 1, 5:1}
charCount("hello")         // {h:1, e:1, l:2, o:1}
```

