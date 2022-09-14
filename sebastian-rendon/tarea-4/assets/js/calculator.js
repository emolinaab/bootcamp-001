export default class Calculator {
  static operators = ['×', '÷', '+', '-'];
  static operands = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '.',
  ];

  equation;
  history;
  freshlyEvaled;
  error;

  constructor() {
    this.equation = '';
    this.history = '';
    this.freshlyEvaled = true;
    this.error = false;
  }

  /**
   *
   * @returns {boolean}
   */
  get equationEndsWithOperator() {
    return Calculator.operators.some((operator) =>
      this.equation.endsWith(`<wbr>${operator}<wbr>`)
    );
  }

  /**
   *
   * @returns {string[]}
   */
  get infixNotation() {
    return this.equation.split('<wbr>');
  }

  clear() {
    this.setEquation('');
    this.setHistory('');
    this.setFreshlyEvaled(true);
    this.setError(false);
  }

  delete() {
    if (this.equationEndsWithOperator)
      this.setEquation(this.equation.slice(0, -11));
    else this.setEquation(this.equation.slice(0, -1));
  }

  /**
   *
   * @param {string} value
   */
  addOperandToEquation(value) {
    if (this.freshlyEvaled || this.error) {
      this.setEquation(value);
      this.setFreshlyEvaled(false);
      this.setError(false);
    } else {
      this.setEquation(this.equation + value);
    }
  }

  /**
   *
   * @param {string} value
   */
  addOperatorToEquation(value) {
    if (this.freshlyEvaled) this.setFreshlyEvaled(false);
    if (this.error) this.setError(false);

    if (this.equationEndsWithOperator) {
      this.setEquation(`${this.equation.slice(0, -11)}<wbr>${value}<wbr>`);
    } else {
      this.setEquation(`${this.equation}<wbr>${value}<wbr>`);
    }
  }

  /**
   *
   * @param {string} value
   */
  setEquation(value) {
    this.equation = value;
  }

  /**
   *
   * @param {string} value
   */
  setHistory(value) {
    this.history = value;
  }

  /**
   *
   * @param {boolean} value
   */
  setFreshlyEvaled(value) {
    this.freshlyEvaled = value;
  }

  /**
   *
   * @param {boolean} value
   */
  setError(value) {
    this.error = value;
  }

  evalEquationResult() {
    if (!this.equationEndsWithOperator && !this.error) {
      try {
        const result = this.evalPostfixNotation();

        this.setFreshlyEvaled(true);
        this.setHistory(this.equation);
        this.setEquation(`${result}`);
      } catch (error) {
        this.setError(true);
      }
    }
  }

  /**
   *
   * @returns {number}
   */
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

  /**
   *
   * @returns {string[]}
   */
  getPostfixNotation() {
    const stack = [];
    const result = [];

    for (const token of this.infixNotation) {
      if (!Calculator.operators.includes(token)) result.push(token);
      else {
        while (
          !!stack.length &&
          this.getOperationPriority(token) <=
            this.getOperationPriority(stack[stack.length - 1])
        ) {
          result.push(stack.pop());
        }
        stack.push(token);
      }
    }

    while (!!stack.length) result.push(stack.pop());

    return result;
  }

  /**
   *
   * @param {string} token
   * @returns {number}
   */
  getOperationPriority(token) {
    if (token === '÷' || token === '×') return 2;
    if (token === '+' || token == '-') return 1;
    return 0;
  }

  /**
   *
   * @param {number} firstOperand
   * @param {number} secondOperand
   * @param {string} operator
   * @returns
   */
  getOperationResult(firstOperand, secondOperand, operator) {
    let newOperand;

    if (operator === '÷') {
      if (firstOperand === 0) throw new Error('Cannot divide by 0');
      newOperand = secondOperand / firstOperand;
    } else if (operator === '×') newOperand = secondOperand * firstOperand;
    else if (operator === '+') newOperand = secondOperand + firstOperand;
    else if (operator === '-') newOperand = secondOperand - firstOperand;

    if (Number.isNaN(newOperand)) throw new Error('The result is not a number');
    return newOperand;
  }
}
