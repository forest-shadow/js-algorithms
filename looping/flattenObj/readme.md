# flattenObj

---
Write `flattenObj` function based on looping logic to traverse passed in object

```js
const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
  e: {
    f: {
      g: 4,
      h: 5,
    },
  },
}

flattenObj(obj);
// =>
/* 
 {    
   a: 1,
   b: 2,
   'c:d': 3,
   'e:f:g': 4,
   'e:f:h': 5
 }
 */

```