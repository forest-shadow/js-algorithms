# groupObjectArray

Write function that will group provided objects arrat by one of the array's key.

```js
const objArr = [
  { name: "John", job: "carpenter", rank: 2 },
  { name: "Jenny", job: "teacher", rank: 2 },
  { name: "Bob", job: "buthcer", rank: 3 },
]
groupObjectArray(objArray, 'rank')
/*
{
  2: [
    { name: "John", job: "carpenter", rank: 2 },
    { name: "Jenny", job: "teacher", rank: 2 },
  ],
  3: [
    { name: "Bob", job: "buthcer", rank: 3 },
  ]
}
*/
```