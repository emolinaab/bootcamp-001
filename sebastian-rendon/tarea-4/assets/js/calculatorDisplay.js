import Calculator from './calculator.js';

export default class CalculatorDisplay {
  _calculator;
  _resultElement;
  _historyElement;
  _btns;

  constructor({
    calculator,
    resultElementSelector,
    historyElementSelector,
    btnSelector,
  }) {
    this._calculator = calculator;
    this._resultElement = document.querySelector(resultElementSelector);
    this._historyElement = document.querySelector(historyElementSelector);
    this._btns = document.querySelectorAll(btnSelector);
  }

  mount() {
    const display = this;

    const onClearBtnClick = () => {
      display._calculator.clear();
      display.update();
    };

    const onDelBtnClick = () => {
      display._calculator.delete();
      display.updateResult();
    };

    const onNumberBtnClick = (event) => {
      display._calculator.addOperandToEquation(event.target.value);
      display.updateResult();
    };

    const onOperatorBtnClick = (event) => {
      display._calculator.addOperatorToEquation(event.target.value);
      display.updateResult();
    };

    const onEqualBtnClick = () => {
      display._calculator.evalEquationResult();
      display.update();
    };

    const onKeyDown = (e) => {
      console.log(e.key);
      if (Calculator.operands.includes(e.key))
        display._calculator.addOperandToEquation(e.key);
      else if (Calculator.operators.includes(e.key))
        display._calculator.addOperatorToEquation(e.key);
      else if (e.key === '/') display._calculator.addOperatorToEquation('÷');
      else if (e.key === '*') display._calculator.addOperatorToEquation('×');
      else if (e.key === 'Enter') display._calculator.evalEquationResult();
      else if (e.key === 'Backspace') display._calculator.delete();
      display.update();
    };

    const btnClickHandlers = {
      number: onNumberBtnClick,
      operator: onOperatorBtnClick,
      clear: onClearBtnClick,
      equal: onEqualBtnClick,
      delete: onDelBtnClick,
    };

    window.addEventListener('keydown', onKeyDown);
    display._btns.forEach((btn) =>
      btn.addEventListener('click', btnClickHandlers[btn.dataset.type])
    );
  }

  update() {
    this.updateResult();
    this.updateHistory();
  }

  updateResult() {
    if (this._calculator.error) this._resultElement.innerHTML = 'ERROR';
    else this._resultElement.innerHTML = this._calculator.equation || '0';
  }

  updateHistory() {
    this._historyElement.innerHTML = this._calculator.history || '0';
  }
}
