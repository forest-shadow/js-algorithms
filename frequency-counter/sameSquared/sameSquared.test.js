import sameSquared from './sameSquared'

describe('sameSquared', () => {
  test("should return 'true' if every value in the array has it\'s corresponding value squared in the second array", () => {
    expect(sameSquared([1,2,3], [4,1,9])).toBe(true)
  })
  test("should return 'false' if at least one value in the array has no corresponding value squared in the second array", () => {
    expect(sameSquared([1,2,3], [1,9])).toBe(false)
    expect(sameSquared([1,2,1], [4,4,1])).toBe(false)
  })
})