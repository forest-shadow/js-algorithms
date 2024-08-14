/**
 * createCounterWithMehtods - funcion returning object with methods
 * @param {number} init
 * @return { { increment: Function, decrement: Function, reset: Function} }
 */
const createCounterWithMethods = init => {
  let counter = init || 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
    reset: () => counter = init
  }
}

export default createCounterWithMethods;