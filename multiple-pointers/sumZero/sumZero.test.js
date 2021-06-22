import sumZero from './sumZero'

describe('sumZero', () => {
  test("should return array of first two elements which sum equals to 0", () => {
    expect(sumZero([-3,-2,-1,0,1,2,3])).toEqual([-3,3])
  })
  test("should return 'undefined' if there are no elements with 0 sum in array", () => {
    expect(sumZero([-2,0,1,3])).toBe(undefined)
    expect(sumZero([1,2,3])).toBe(undefined)
  })
})