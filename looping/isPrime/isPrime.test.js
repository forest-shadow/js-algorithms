import { isPrimeAdvanced, isPrimeNaive } from './isPrime';

describe('isPrime algorithms', () => {
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  describe('isPrimeNaive', () => {
    it('should return false if provided number equal to zero', () => {
      expect(isPrimeNaive(0)).toEqual(false);
    });
    it('should return true if provided number is prime number', function () {
      primeNumbers.forEach((primeNumber) => {
        expect(isPrimeNaive(primeNumber)).toEqual(true);
      })
    });
  });
  describe('isPrimeAdvanced', () => {
    it('should return false if provided number equal to zero', () => {
      expect(isPrimeAdvanced(0)).toEqual(false);
    });
    it('should return true if provided number is prime number', function () {
      primeNumbers.forEach((primeNumber) => {
        expect(isPrimeAdvanced(primeNumber)).toEqual(true);
      })
    });
  });
});
