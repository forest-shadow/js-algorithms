import exp from '../exp';

describe('exp', () => {
  it('should return powered value', () => {
    expect(exp(5, 3)).toEqual(125);
  });
});
