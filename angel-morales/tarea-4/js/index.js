"use strict";

const previousNumber = document.getElementById("previous-number");
const currentNumber = document.getElementById("current-number");

const buttonsNumber = document.querySelectorAll(".button-number");
const buttonOperation = document.querySelectorAll(".button-operation");
const buttonEqual = document.querySelector(".button-equal");
const buttonDelete = document.querySelector(".button-delete");
const buttonClear = document.querySelector(".button-clear");


const calculator = new Calculator(currentNumber, previousNumber);

buttonsNumber.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.innerText);
    calculator.showDisplay();
  });
});

buttonDelete.addEventListener("click", () => {
  calculator.delete();
  calculator.showDisplay();
});

buttonOperation.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.selectOperation(button.innerText);
    calculator.showDisplay();
  });
});

buttonEqual.addEventListener("click", () => {
  calculator.calculate();
  calculator.showDisplay();
});

buttonClear.addEventListener("click", () => {
  calculator.clearDisplay();
  calculator.showDisplay();
});
