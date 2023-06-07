import operate from './logic/operate';

describe('Arithmetic', () => {
  it('Add numbers', () => {
    const result = operate(10, 5, '+');
    expect(result).toBe('15');
  });

  it('Subtract numbers', () => {
    const result = operate(10, 5, '-');
    expect(result).toBe('5');
  });

  it('Divide numbers', () => {
    const result = operate(10, 5, '÷');
    expect(result).toBe('2');
  });

  it('Multiply numbers', () => {
    const result = operate(10, 5, 'x');
    expect(result).toBe('50');
  });

  it('Modulo of numbers', () => {
    const result = operate(10, 5, '%');
    expect(result).toBe('0');
  });
});
