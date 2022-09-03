const result = document.getElementById('result');
const reset = document.getElementById('reset');
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const equal = document.getElementById('equal');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const percentage = document.getElementById('percentage');
const point = document.getElementById('point');
let firstpoint = false;
let op = false;
let operation = '';
let operatora = 0;
let operatorb = 0;

one.addEventListener('click', () => {
  result.textContent = result.textContent + '1';
});

two.addEventListener('click', () => {
  result.textContent = result.textContent + '2';
});

three.addEventListener('click', () => {
  result.textContent = result.textContent + '3';
});

four.addEventListener('click', () => {
  result.textContent = result.textContent + '4';
});

five.addEventListener('click', () => {
  result.textContent = result.textContent + '5';
});

six.addEventListener('click', () => {
  result.textContent = result.textContent + '6';
});

seven.addEventListener('click', () => {
  result.textContent = result.textContent + '7';
});

eight.addEventListener('click', () => {
  result.textContent = result.textContent + '8';
});

nine.addEventListener('click', () => {
  result.textContent = result.textContent + '9';
});

zero.addEventListener('click', () => {
  result.textContent = result.textContent + '0';
});

reset.addEventListener('click', () => {
  resett();
});

point.addEventListener('click', () => {
  if (result.textContent != '' && firstpoint == false) {
    result.textContent = result.textContent + '.';
    firstpoint = true;
  }
});

addition.addEventListener('click', () => {
  if (op == false) {
    operatora = result.textContent;
    operation = '+';
    firstpoint = false;
    op = true;
  }
  operation = '+';
  firstpoint = false;
  clean();
});

subtraction.addEventListener('click', () => {
  if (result.textContent == '') {
    result.textContent = result.textContent + '-';
  } else {
    if (op == false) {
      operatora = result.textContent;
      operation = '-';
      firstpoint = false;
      op = true;
    }
    operation = '-';
    firstpoint = false;
    clean();
  }
});

multiplication.addEventListener('click', () => {
  if (op == false) {
    operatora = result.textContent;
    operation = '*';
    firstpoint = false;
    op = true;
  }
  operation = '*';
  firstpoint = false;
  clean();
});

division.addEventListener('click', () => {
  if (op == false) {
    operatora = result.textContent;
    operation = '/';
    firstpoint = false;
    op = true;
  }
  operation = '/';
  firstpoint = false;
  clean();
});

percentage.addEventListener('click', () => {
  if (op == false) {
    operatorb = result.textContent;
    operation = '%';
    firstpoint = false;
    op = true;
  }
  operation = '%';
  firstpoint = false;
  solve();
});

equal.addEventListener('click', () => {
  operatorb = result.textContent;
  op = false;
  solve();
});

function clean() {
  result.textContent = '';
}

function resett() {
  result.textContent = '';
  operatora = 0;
  operatorb = 0;
  operation = '';
  op = false;
  firstpoint = false;
}

function solve() {
  var res = 0;
  switch (operation) {
    case '+':
      res = parseFloat(operatora) + parseFloat(operatorb);
      break;
    case '-':
      res = parseFloat(operatora) - parseFloat(operatorb);
      break;
    case '/':
      res = parseFloat(operatora) / parseFloat(operatorb);
      break;
    case '*':
      res = parseFloat(operatora) * parseFloat(operatorb);
      break;
    case '%':
      res = parseFloat(operatorb) / 100;
      break;
  }
  result.textContent = res;
  op = false;
}
