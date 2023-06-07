import operate from "./logic/operate";

describe('Arithmetic', () => {
  it('Add numbers', () => {
    let result = operate(10, 5, '+');
    expect(result).toBe('15');
  });

  it('Subtract numbers', () => {
    let result = operate(10, 5, '-');
    expect(result).toBe('5');
  });

  it('Divide numbers', () => {
    let result = operate(10, 5, '÷');
    expect(result).toBe('2');
  });

  it('Multiply numbers', () => {
    let result = operate(10, 5, 'x');
    expect(result).toBe('50');
  });

  it('Modulo of numbers', () => {
    let result = operate(10, 5, '%');
    expect(result).toBe('0');
  });
});