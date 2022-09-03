class Screen {
  constructor(screenBeforValue, screenActualValue) {
    this.screenBeforValue = screenBeforValue;
    this.screenActualValue = screenActualValue;
    this.calculator = new Calculator();
    this.beforValue = "";
    this.actualValue = "";
    this.tipeOperation = undefined;
    this.signos = {
      add: "+",
      divide: "/",
      multiply: "x",
      subtract: "-",
    };
  }

  addNumber(number) {
    if (number === "." && this.actualValue.includes(".")) return;
    this.actualValue = this.actualValue.toString() + number.toString();
    this.printValue();
  }

  printValue() {
    this.screenBeforValue.textContent = this.actualValue;
    this.screenActualValue.textContent = `${this.beforValue} ${
      this.signos[this.tipeOperation] || ""
    }`;
  }

  delete() {
    this.actualValue = this.actualValue.toString().slice(0, -1);
    this.printValue();
  }

  allDelete() {
    this.actualValue = "";
    this.beforValue = "";
    this.tipeOperation = undefined;
    this.printValue();
  }

  calculate() {
    const actualValue = parseFloat(this.actualValue);
    const beforValue = parseFloat(this.beforValue);
    if (isNaN(actualValue) || isNaN(beforValue)) return;
    this.actualValue = this.calculator[this.tipeOperation](
      beforValue,
      actualValue
    );
  }

  operation(operator) {
    this.tipeOperation !== "equal" && this.calculate();
    this.tipeOperation = operator;
    this.beforValue = this.actualValue || this.beforValue;
    this.actualValue = "";
    this.printValue();
  }
}
