import groupObjectArray from "./groupObjectArray";

describe('groupObjectArray', () => {
  it('should return collection of array elements grouped by key', () => {
    const expected = {
      2: [
        { name: "John", job: "carpenter", rank: 2 },
        { name: "Jenny", job: "teacher", rank: 2 },
      ],
      3: [
        { name: "Bob", job: "buthcer", rank: 3 },
      ]
    };
    const objArr = [
      { name: "John", job: "carpenter", rank: 2 },
      { name: "Jenny", job: "teacher", rank: 2 },
      { name: "Bob", job: "buthcer", rank: 3 },
    ];
    expect(groupObjectArray(objArr, 'rank')).toEqual(expected);
  });
});