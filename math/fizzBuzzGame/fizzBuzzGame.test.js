import { fizzBuzzGame } from './fizzBuzzGame';

describe('fizzBuzzGame', () => {
  it('should return array according to the rules of the game', () => {
    expect(fizzBuzzGame(3)).toEqual(["1", "2", "Fizz"]);
    expect(fizzBuzzGame(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    expect(fizzBuzzGame(15)).toEqual(["1", "2", "Fizz", "4","Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
  });
});
