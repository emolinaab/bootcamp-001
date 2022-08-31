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
const ansButton = document.querySelector("[value='ans']");
const divide = document.querySelector("[value='/']");
const multiply = document.querySelector("[value='x']");
const minus = document.querySelector("[value='-']");
const plus = document.querySelector("[value='+']");
const equals = document.querySelector("[value='=']");
const decimalButton = document.querySelector("[value='.']");
const summary = document.querySelector("#summary p");
const input = document.querySelector("#input p");

let isDecimal = false;
let isPercentage = false;
let isResult = false;
let isAns = false;
let firstOperand = null;
let secondOperand = null;
let operation = null;
let decimalValue = null;
let additionalZeros = 0;
let ans = 0;

const updateSummary = (data, reset = true) => {
  if (reset) {
    summary.innerHTML = data.toString().slice(-20);
  } else {
    summary.innerHTML += data.toString().slice(-20);
  }
};

const updateInput = (data, reset = true) => {
  if (reset) {
    input.innerHTML = data.toString().substring(0, 10);
  } else {
    input.innerHTML += data.toString().substring(0, 10);
  }
};

const turnToDecimal = (number) => {
  if (!number) return 0;
  return number / 10 ** (number.toString().length + additionalZeros);
};

const handleNumber = (number) => {
  if (isAns || isPercentage) return;
  if (isResult) {
    clearAll();
    firstOperand = number;
    isResult = false;
  } else if (isDecimal) {
    if (!decimalValue && number === 0) additionalZeros += 1;
    decimalValue = decimalValue * 10 + number;
  } else if (!operation) {
    if (firstOperand === 0 && number === 0) return;
    firstOperand = firstOperand * 10 + number;
  } else {
    if (secondOperand === 0 && number === 0) return;
    secondOperand = secondOperand * 10 + number;
  }

  if (input.innerHTML === operation) updateInput("");
  updateInput(number, false);
  updateSummary(number, false);
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
  handleDecimals();
  if (secondOperand === null) return;
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
  secondOperand = null;
  operation = null;
};

const handleOperation = (symbol) => {
  if (operation && secondOperand === null) return;
  isAns = false;
  isResult = false;
  isPercentage = false;
  solveOperation();
  updateInput(symbol);
  updateSummary(symbol, false);
  operation = symbol;
};

const handleDecimal = () => {
  if (isDecimal || isAns) return;
  if (isResult) clearAll();
  if (input.innerHTML === "") {
    updateInput("0", false);
    updateSummary("0", false);
    firstOperand = 0;
  }
  updateInput(".", false);
  updateSummary(".", false);
  isDecimal = true;
};

const showResult = () => {
  if (operation && secondOperand === null) return;
  solveOperation();
  isAns = false;
  isPercentage = false;
  updateInput(firstOperand);
  isResult = true;
  ans = firstOperand;
};

const clearAll = () => {
  firstOperand = null;
  secondOperand = null;
  operation = null;
  isDecimal = false;
  decimalValue = null;
  isPercentage = false;
  isAns = false;
  isResult = false;
  updateInput("");
  updateSummary("");
};

const handleAns = () => {
  if (!ans) return;
  if (isResult) {
    clearAll();
    firstOperand = ans;
    isResult = false;
  } else if (!operation) {
    if (firstOperand) return;
    firstOperand = ans;
  } else {
    if (secondOperand) return;
    secondOperand = ans;
    updateSummary(operation, false);
  }
  isAns = true;
  updateInput("ans");
  updateSummary(ans, false);
};

const handlePercentage = () => {
  if (isPercentage || isAns || isResult) return;
  if (!operation) {
    if (firstOperand === null) return;
    firstOperand = firstOperand / 100;
  } else {
    if (secondOperand === null) return;
    secondOperand = secondOperand / 100;
  }
  isPercentage = true;
  updateInput("%", false);
  updateSummary("%", false);
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
ansButton.addEventListener("click", handleAns);
percentage.addEventListener("click", handlePercentage);
