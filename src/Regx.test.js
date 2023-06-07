import { isNumber } from './logic/calculate';

test('Check for Regex', () => {
  const output = isNumber('5');
  expect(output).toBe(true);
});
