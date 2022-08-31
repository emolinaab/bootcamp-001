const zero = document.querySelector("[value='0']");
const one = document.querySelector("[value='1']");
const two = document.querySelector("[value='2']");
const three = document.querySelector("[value='3']");
const four = document.querySelector("[value='4']");
const five = document.querySelector("[value='5']");
const six = document.querySelector("[value='6']");
const seven = document.querySelector("[value='7']");
const eight = document.querySelector("[value='8']");
const nine = document.querySelector("[value='9']");
const clear = document.querySelector("[value='C']");
const percentage = document.querySelector("[value='%']");
const divide = document.querySelector("[value='/']");
const multiply = document.querySelector("[value='x']");
const minus = document.querySelector("[value='-']");
const plus = document.querySelector("[value='+']");
const equals = document.querySelector("[value='=']");
const decimalButton = document.querySelector("[value='.']");
const summary = document.querySelector("#summary p");
const input = document.querySelector("#input p");

let firstOperand = 0;
let secondOperand = 0;
let operation = null;
let isDecimal = false;
let decimalValue = null;
let isResult = false;
let additionalZeros = 0;

const turnToDecimal = (number) =>
  number / 10 ** (number.toString().length + additionalZeros);

const handleNumber = (number) => {
  if (isResult) {
    if (number === 0) return;
    clearAll();
    firstOperand = number;
    isResult = false;
  } else if (isDecimal) {
    console.log(decimalValue);
    if (!decimalValue && number === 0) additionalZeros += 1;
    decimalValue = decimalValue * 10 + number;
  } else if (!operation) {
    if (!firstOperand && number === 0) return;
    firstOperand = (firstOperand ?? 0) * 10 + number;
  } else {
    if (!secondOperand && number === 0) return;
    if (!secondOperand) summary.innerHTML += operation;
    secondOperand = (secondOperand ?? 0) * 10 + number;
  }
  input.innerHTML += number;
  summary.innerHTML += number;
};

const handleDecimals = () => {
  if (!isDecimal) return;

  if (operation) {
    secondOperand += turnToDecimal(decimalValue);
  } else {
    firstOperand += turnToDecimal(decimalValue);
  }

  isDecimal = false;
  decimalValue = 0;
  additionalZeros = 0;
};

const solveOperation = () => {
  if (!secondOperand) return;

  switch (operation) {
    case "+":
      firstOperand += secondOperand;
      break;
    case "-":
      firstOperand -= secondOperand;
      break;
    case "x":
      firstOperand *= secondOperand;
      break;
    case "/":
      firstOperand /= secondOperand;
      break;
  }
  secondOperand = 0;
  operation = null;
};

const handleOperation = (symbol) => {
  if (operation && !secondOperand) return;
  isResult = false;
  handleDecimals();
  solveOperation();
  input.innerHTML = symbol;
  operation = symbol;
};

const handleDecimal = () => {
  if (isDecimal) return;
  input.innerHTML += ".";
  summary.innerHTML += ".";
  isDecimal = true;
};

const showResult = () => {
  handleDecimals();
  solveOperation();
  input.innerHTML = firstOperand;
  isResult = true;
};

const clearAll = () => {
  firstOperand = 0;
  secondOperand = 0;
  operation = null;
  isDecimal = false;
  decimalValue = null;
  isResult = false;
  input.innerHTML = "";
  summary.innerHTML = "";
};

zero.addEventListener("click", () => handleNumber(0));
one.addEventListener("click", () => handleNumber(1));
two.addEventListener("click", () => handleNumber(2));
three.addEventListener("click", () => handleNumber(3));
four.addEventListener("click", () => handleNumber(4));
five.addEventListener("click", () => handleNumber(5));
six.addEventListener("click", () => handleNumber(6));
seven.addEventListener("click", () => handleNumber(7));
eight.addEventListener("click", () => handleNumber(8));
nine.addEventListener("click", () => handleNumber(9));
decimalButton.addEventListener("click", handleDecimal);
divide.addEventListener("click", () => handleOperation("/"));
multiply.addEventListener("click", () => handleOperation("x"));
minus.addEventListener("click", () => handleOperation("-"));
plus.addEventListener("click", () => handleOperation("+"));
equals.addEventListener("click", showResult);
clear.addEventListener("click", clearAll);
