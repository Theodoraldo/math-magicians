import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './components/Calculator';

describe('Calculator', () => {
  it('should perform addition', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const btn1 = getByText('1');
    const btnPlus = getByText('+');
    const btnEqual = getByText('=');
    const output = getByTestId('output');

    fireEvent.click(btn1);
    fireEvent.click(btnPlus);
    fireEvent.click(btn1);
    fireEvent.click(btnEqual);

    expect(output.textContent).toBe('2');
  });

  it('should perform division', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const btn8 = getByText('8');
    const btnDivide = getByText('÷');
    const btn2 = getByText('2');
    const btnEqual = getByText('=');
    const output = getByTestId('output');

    fireEvent.click(btn8);
    fireEvent.click(btnDivide);
    fireEvent.click(btn2);
    fireEvent.click(btnEqual);

    expect(output.textContent).toBe('4');
  });

  it('should perform subtraction', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const btn8 = getByText('8');
    const btnDivide = getByText('-');
    const btn2 = getByText('2');
    const btnEqual = getByText('=');
    const output = getByTestId('output');

    fireEvent.click(btn8);
    fireEvent.click(btnDivide);
    fireEvent.click(btn2);
    fireEvent.click(btnEqual);

    expect(output.textContent).toBe('6');
  });

  it('should perform multiplication', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const btn8 = getByText('8');
    const btnDivide = getByText('x');
    const btn2 = getByText('2');
    const btnEqual = getByText('=');
    const output = getByTestId('output');

    fireEvent.click(btn8);
    fireEvent.click(btnDivide);
    fireEvent.click(btn2);
    fireEvent.click(btnEqual);

    expect(output.textContent).toBe('16');
  });
});
