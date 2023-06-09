import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    operation: null,
    total: 0,
    next: null,
  });

  const arithmetic = (e) => {
    const calBtn = e.target.value;
    const updateObject = calculate(state, calBtn);
    setState(({
      operation: updateObject.operation,
      total: updateObject.total,
      next: updateObject.next,
    }));
  };

  const { total, next } = state;
  let result = '';
  if (total) {
    result = `${total}`;
  }

  if (next) {
    result = `${next}`;
  }

  return (
    <div className="App">
      <div className="header">Let&#39;s do some Maths</div>
      <div className="container">
        <div className="output">{result || 0}</div>
        <div className="buttons">
          <button className="btn-links" type="button" value="AC" onClick={arithmetic}>AC</button>
          <button className="btn-links" type="button" value="+/-" onClick={arithmetic}>+/-</button>
          <button className="btn-links" type="button" value="%" onClick={arithmetic}>%</button>
          <button className="btn-links operator" type="button" value="÷" onClick={arithmetic}>÷</button>
          <button className="btn-links" type="button" value="7" onClick={arithmetic}>7</button>
          <button className="btn-links" type="button" value="8" onClick={arithmetic}>8</button>
          <button className="btn-links" type="button" value="9" onClick={arithmetic}>9</button>
          <button className="btn-links operator" type="button" value="x" onClick={arithmetic}>x</button>
          <button className="btn-links" type="button" value="4" onClick={arithmetic}>4</button>
          <button className="btn-links" type="button" value="5" onClick={arithmetic}>5</button>
          <button className="btn-links" type="button" value="6" onClick={arithmetic}>6</button>
          <button className="btn-links operator" type="button" value="-" onClick={arithmetic}>-</button>
          <button className="btn-links" type="button" value="1" onClick={arithmetic}>1</button>
          <button className="btn-links" type="button" value="2" onClick={arithmetic}>2</button>
          <button className="btn-links" type="button" value="3" onClick={arithmetic}>3</button>
          <button className="btn-links operator" type="button" value="+" onClick={arithmetic}>+</button>
          <button className="btn-links span-2" type="button" value="0" onClick={arithmetic}>0</button>
          <button className="btn-links" type="button" value="." onClick={arithmetic}>.</button>
          <button className="btn-links operator" type="button" value="=" onClick={arithmetic}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
