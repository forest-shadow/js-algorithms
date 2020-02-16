import arrSum from '../arrSum';

describe('arrSum', () => {
  it(`should return sum of array's digits`, () => {
    expect(arrSum([5, 6, 7, 8])).toEqual(26);
  });
});
