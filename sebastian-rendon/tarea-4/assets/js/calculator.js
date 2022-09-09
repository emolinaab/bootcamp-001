export default class Calculator {
  static _operators = ['×', '÷', '+', '-'];

  equation;
  history;
  freshlyEvaled;

  constructor() {
    this.equation = '0';
    this.history = '';
    this.freshlyEvaled = true;
  }

  get equationEndsWithOperator() {
    return Calculator._operators.some((operator) =>
      this.equation.endsWith(`<wbr>${operator}<wbr>`)
    );
  }

  get infixNotation() {
    return this.equation.split('<wbr>');
  }

  clear() {
    this.setEquation('0');
    this.setHistory('');
    this.setFreshlyEvaled(true);
  }

  delete() {
    if (this.equationEndsWithOperator)
      this.setEquation(this.equation.slice(0, -11));
    else this.setEquation(this.equation.slice(0, -1));
  }

  addNumberToEquation(value) {
    if (this.freshlyEvaled) {
      this.setEquation(value);
      this.setFreshlyEvaled(false);
    } else {
      this.setEquation(this.equation + value);
    }
  }

  addOperatorToEquation(value) {
    if (this.freshlyEvaled) this.setFreshlyEvaled(false);
    if (this.equationEndsWithOperator) {
      this.setEquation(`${this.equation.slice(0, -11)}<wbr>${value}<wbr>`);
    } else {
      this.setEquation(`${this.equation}<wbr>${value}<wbr>`);
    }
  }

  setEquation(value) {
    this.equation = value;
  }

  setHistory(value) {
    this.history = value;
  }

  setFreshlyEvaled(value) {
    this.freshlyEvaled = value;
  }

  setEquationResult() {
    if (!this.equationEndsWithOperator) {
      const result = this.evalPostfixNotation();
      this.setFreshlyEvaled(true);
      this.setHistory(this.equation);
      this.setEquation(`${result}`);
    }
  }

  evalPostfixNotation() {
    const postfixNotation = this.getPostfixNotation();
    const stack = [];

    for (const token of postfixNotation) {
      if (!Number.isNaN(parseFloat(token))) stack.push(token);
      else {
        const firstOperand = Number.parseFloat(stack.pop());
        const secondOperand = Number.parseFloat(stack.pop());
        stack.push(this.getOperationResult(firstOperand, secondOperand, token));
      }
    }

    return stack.pop();
  }

  getPostfixNotation() {
    const stack = [];
    const result = [];

    for (const token of this.infixNotation) {
      if (!Calculator._operators.includes(token)) result.push(token);
      else {
        while (
          !!stack.length &&
          this.getPrecedence(token) <=
            this.getPrecedence(stack[stack.length - 1])
        ) {
          result.push(stack.pop());
        }
        stack.push(token);
      }
    }

    while (!!stack.length) result.push(stack.pop());

    return result;
  }

  getPrecedence(token) {
    if (token === '÷' || token === '×') return 2;
    if (token === '+' || token == '-') return 1;
    return 0;
  }

  getOperationResult(firstOperand, secondOperand, operator) {
    if (operator === '÷') return secondOperand / firstOperand;
    if (operator === '×') return secondOperand * firstOperand;
    if (operator === '+') return secondOperand + firstOperand;
    if (operator === '-') return secondOperand - firstOperand;
  }
}
