/**
 * createCounterWithMehtods - funcion returning object with methods
 * @param {number} init
 * @return { { increment: Function, decrement: Function, reset: Function} }
 */
export const createCounterWithMehtods = (init) => {
  let counter = init;

  return {
    increment: () => {
      return ++counter;
    },
    decrement: () => {
      return --counter;
    },
    reset: () => {
      return counter = init;
    }
  }
};
