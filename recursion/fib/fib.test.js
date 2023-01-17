import fib from './fib';

describe('fib', () => {
  const fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
  it('should return Fibonacci sequence n-th number', () => {
    fibSequence.forEach((fibNumber, index) => {
      expect(fib(index)).toEqual(fibNumber);
    })
  });
});
