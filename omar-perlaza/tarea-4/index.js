const screenBeforValue = document.getElementById("befor-value");
const screenActualValue = document.getElementById("actual-value");
const bottonsNumbers = document.querySelectorAll(".number");
const bottonsOperator = document.querySelectorAll(".operator");

const calculator = new Calculator();

const screen = new Screen(screenBeforValue, screenActualValue);

bottonsNumbers.forEach((boton) => {
  boton.addEventListener("click", () => screen.addNumber(boton.innerHTML));
});

bottonsOperator.forEach((boton) => {
  boton.addEventListener("click", () => screen.operation(boton.value));
});
