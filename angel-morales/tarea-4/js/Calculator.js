"use strict";

class Calculator {
  constructor(currentNumber, previousNumber) {
    this.currentNumber = currentNumber;
    this.previousNumber = previousNumber;
    this.currentValue = "";
    this.previousValue = "";
    this.operation = undefined;
  }

  addNumber(number) {
    if (number === "." && this.currentValue.includes(".")) return;
    this.currentValue += number;
  }

  showDisplay() {
    this.currentNumber.innerText = this.currentValue;
    this.previousNumber.innerText = this.previousValue;
  }

  delete() {
    this.currentValue = this.currentValue.slice(0, -1);
  }

  selectOperation(operation) {
    if (this.currentNumber === "") return;
    if (this.previousNumber != "") {
      this.calculate();
    }

    this.operation = operation;
    this.previousValue = this.currentValue;
    this.currentValue = "";
  }

  calculate() {
    let result;
    // conversion of string data to numeric.
    let converCurrentVal = parseFloat(this.currentValue);
    let converPreviousVal = parseFloat(this.previousValue);

    if (isNaN(converPreviousVal) || isNaN(converCurrentVal)) return;
    switch (this.operation) {
      case "+":
        result = converPreviousVal + converCurrentVal;
        break;
      case "-":
        result = converPreviousVal - converCurrentVal;
        break;
      case "x":
        result = converPreviousVal * converCurrentVal;
        break;
      case "/":
        result = converPreviousVal / converCurrentVal;
        break;
      default:
        break;
    }
    if (result !== undefined) {
      this.currentValue = result;
      this.operation = undefined;
      this.previousValue = "";
    }
  }

  clearDisplay() {
    this.currentValue = "";
    this.previousValue = "";
    this.operation = undefined;
  }
}
