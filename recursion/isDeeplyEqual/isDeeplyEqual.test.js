import { isDeeplyEqual } from './isDeeplyEqual';

describe('isObjectEquals', () => {
  const obj1 = { a: 1, b: '2', c: 'test' }

  it('should return true if passed-in values are deeply equal', () => {
    expect(isDeeplyEqual(1, 1)).toEqual(true);
    expect(isDeeplyEqual('test', 'test')).toEqual(true);
    expect(isDeeplyEqual(true, true)).toEqual(true);
    expect(isDeeplyEqual(null, null)).toEqual(true);
    expect(isDeeplyEqual(undefined, undefined)).toEqual(true);
    const obj1WithNestedArr = { a: 1, b: '2', c: [ 1, 2, 3 ] }
    const obj1WithNestedObj = { a: 1, b: '2', c: { a: 1, b: 2, c: 3 } }
    expect(isDeeplyEqual(obj1, {...obj1})).toEqual(true);
    expect(isDeeplyEqual(obj1WithNestedArr, {...obj1WithNestedArr })).toEqual(true);
    expect(isDeeplyEqual(obj1WithNestedObj, {...obj1WithNestedObj })).toEqual(true);
  })

  it('should return false if passed-in object are not equal', () => {
    const obj2 = { a: 1, b: '3', c: 'test' }
    const obj1WithNestedArr = { a: 1, b: '2', c: [ 1, 2, 3 ] }
    const obj2WithNestedArr = { a: 1, b: '2', c: [ 1, 3, 2 ] }
    const obj1WithNestedObj = { a: 1, b: '2', c: { a: 1, b: 2, c: 3 } }
    const obj2WithNestedObj = { a: 1, b: '2', c: { a: 2, b: 1, c: 3 } }
    expect(isDeeplyEqual(obj1, obj2)).toEqual(false);
    expect(isDeeplyEqual(obj1WithNestedArr, obj2WithNestedArr)).toEqual(false);
    expect(isDeeplyEqual(obj1WithNestedObj, obj2WithNestedObj)).toEqual(false);
  })
  it('should return false if passed-in values are of different types', () => {
    expect(isDeeplyEqual({}, null)).toEqual(false);
    expect(isDeeplyEqual(1, '1')).toEqual(false);
    expect(isDeeplyEqual(1, true)).toEqual(false);
    expect(isDeeplyEqual(null, true)).toEqual(false);
    expect(isDeeplyEqual(null, 1)).toEqual(false);
  })
})