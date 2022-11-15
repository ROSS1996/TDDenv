const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test('subtracts 3 - 2 to equal 1', () => {
  expect(calculator.subtract(3, 2)).toEqual(1);
});

test('multiply 3 * 3 to equal 9', () => {
  expect(calculator.multiply(3, 3)).toEqual(9);
});

test('divide 9 / 3 to equal 3', () => {
  expect(calculator.divide(9, 3)).toEqual(3);
});