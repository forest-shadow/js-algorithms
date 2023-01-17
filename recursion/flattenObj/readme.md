# flattenObj

---
Write `flattenObj` recursive function capable to make given object flat

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