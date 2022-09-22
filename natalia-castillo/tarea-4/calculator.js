export class Calculator {
  constructor(previousValueDisplay, currentValueDisplay) {
    this.previousValueDisplay = previousValueDisplay;
    this.currentValueDisplay = currentValueDisplay;
    this.allClear();
  }

  allClear() {
    this.currentOperation = "";
    this.previousOperation = "";
    this.operation = undefined;
  }

  clear() {
    this.currentOperation = this.currentOperation.toString().slice(0, -1);
  }

  getNumber(number) {
    if (number === "." && this.currentOperation.includes(".")) return;
    this.currentOperation =
      this.currentOperation.toString() + number.toString();
  }

  getOperation(operation) {
    if (this.currentOperation === "") return;
    if (this.previousOperation !== "") {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperation = this.currentOperation;
    this.currentOperation = "";
  }

  calculate() {
    let result;
    const previous = parseFloat(this.previousOperation);
    const current = parseFloat(this.currentOperation);
    if (isNaN(previous) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "x":
        result = previous * current;
        break;
      case "÷":
        result = previous / current;
        break;
      default:
        return;
    }
    this.currentOperation = result;
    this.operation = undefined;
    this.previousOperation = "";
  }

  getDisplayValue(number) {
    const stringNumber = number.toString();
    const integer = parseFloat(stringNumber.split(".")[0]);
    const decimal = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integer)) {
      integerDisplay = "";
    } else {
      integerDisplay = integer.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimal != null) {
      return `${integerDisplay}.${decimal}`;
    } else {
      return integerDisplay;
    }
  }

  display() {
    this.currentValueDisplay.innerText = this.getDisplayValue(
      this.currentOperation
    );
    if (this.operation != null) {
      this.previousValueDisplay.innerText = `${this.getDisplayValue(
        this.previousOperation
      )} ${this.operation}`;
    } else {
      this.previousValueDisplay.innerText = "";
    }
  }
}
