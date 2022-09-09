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
      display.updateResult();
    };

    const onDelBtnClick = () => {
      display._calculator.delete();
      display.updateResult();
    };

    const onNumberBtnClick = (event) => {
      display._calculator.addNumberToEquation(event.target.value);
      display.updateResult();
    };

    const onOperatorBtnClick = (event) => {
      display._calculator.addOperatorToEquation(event.target.value);
      display.updateResult();
    };

    const onEqualBtnClick = () => {
      try {
        display._calculator.setEquationResult();
        display.update();
      } catch (error) {}
    };

    const eventHandler = {
      number: onNumberBtnClick,
      operator: onOperatorBtnClick,
      clear: onClearBtnClick,
      equal: onEqualBtnClick,
      delete: onDelBtnClick,
    };

    display._btns.forEach((btn) =>
      btn.addEventListener('click', eventHandler[btn.dataset.type])
    );
  }

  update() {
    this.updateResult();
    this.updateHistory();
  }

  updateResult() {
    this._resultElement.innerHTML = this._calculator.equation || '0';
  }

  updateHistory() {
    this._historyElement.innerHTML = this._calculator.history;
  }
}
