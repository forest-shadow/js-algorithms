import containsDuplicate from './containsDuplicate';

describe('containsDuplicate', () => {
  it('should return false if empty or no array was provided', () => {
    expect(containsDuplicate()).toBeFalsy();
    expect(containsDuplicate([])).toBeFalsy();
  });
  it('should return false in provided array contains only unique elements', () => {
    expect(containsDuplicate([1, 2, 3, 4, 5])).toBeFalsy();
    expect(containsDuplicate([2, 6, 8, 9, 1])).toBeFalsy();
  });
  it('should return true if provided array contains duplicated elements', () => {
    expect(containsDuplicate([1, 2, 3, 4, 1, 2, 3])).toBeTruthy();
    expect(containsDuplicate([5, 1, 2, 3, 4, 5])).toBeTruthy();
  });
});
