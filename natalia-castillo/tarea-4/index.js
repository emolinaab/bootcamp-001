import { Calculator } from "./calculator.js";

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousValueDisplay = document.querySelector("[data-previous-value]");
const currentValueDisplay = document.querySelector("[data-current-value]");

const calculator = new Calculator(previousValueDisplay, currentValueDisplay);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.getNumber(button.innerText);
    calculator.display();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.getOperation(button.innerText);
    calculator.display();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.display();
});

allClearButton.addEventListener("click", (button) => {
  calculator.allClear();
  calculator.display();
});

clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.display();
});
