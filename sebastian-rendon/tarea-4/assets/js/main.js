import Calculator from './calculator.js';
import CalculatorDisplay from './calculatorDisplay.js';

function setupCalculator() {
  const calculator = new Calculator();
  const calculatorDisplay = new CalculatorDisplay({
    calculator,
    resultElementSelector: '#main-result',
    historyElementSelector: '#history',
    btnSelector: '.btn[data-type]',
  });

  calculatorDisplay.mount();
}

window.onload = setupCalculator;
