var operatora;
var operatorb;
var operation;
var firstpoint = false;
var op = false;
function init() {
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');
  var addition = document.getElementById('addition');
  var subtraction = document.getElementById('subtraction');
  var multiplication = document.getElementById('multiplication');
  var division = document.getElementById('division');
  var equal = document.getElementById('equal');
  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');
  var four = document.getElementById('four');
  var five = document.getElementById('five');
  var six = document.getElementById('six');
  var seven = document.getElementById('seven');
  var eight = document.getElementById('eight');
  var nine = document.getElementById('nine');
  var zero = document.getElementById('zero');
  var percentage = document.getElementById('percentage');
  var point = document.getElementById('point');
  //Events
  one.onclick = function (e) {
    result.textContent = result.textContent + '1';
  };

  two.onclick = function (e) {
    result.textContent = result.textContent + '2';
  };
  three.onclick = function (e) {
    result.textContent = result.textContent + '3';
  };
  four.onclick = function (e) {
    result.textContent = result.textContent + '4';
  };
  five.onclick = function (e) {
    result.textContent = result.textContent + '5';
  };
  six.onclick = function (e) {
    result.textContent = result.textContent + '6';
  };
  seven.onclick = function (e) {
    result.textContent = result.textContent + '7';
  };
  eight.onclick = function (e) {
    result.textContent = result.textContent + '8';
  };
  nine.onclick = function (e) {
    result.textContent = result.textContent + '9';
  };
  zero.onclick = function (e) {
    result.textContent = result.textContent + '0';
  };
  point.onclick = function (e) {
    if (result.textContent != '' && firstpoint == false) {
      result.textContent = result.textContent + '.';
      firstpoint = true;
    }
  };
  reset.onclick = function (e) {
    resett();
  };
  addition.onclick = function (e) {
    if (op == false) {
      operatora = result.textContent;
      operation = '+';
      firstpoint = false;
      op = true;
    }
    operation = '+';
    firstpoint = false;
    clean();
  };
  subtraction.onclick = function (e) {
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
  };
  multiplication.onclick = function (e) {
    if (op == false) {
      operatora = result.textContent;
      operation = '*';
      firstpoint = false;
      op = true;
    }
    operation = '*';
    firstpoint = false;
    clean();
  };
  division.onclick = function (e) {
    if (op == false) {
      operatora = result.textContent;
      operation = '/';
      firstpoint = false;
      op = true;
    }
    operation = '/';
    firstpoint = false;
    clean();
  };
  percentage.onclick = function (e) {
    if (op == false) {
      operatorb = result.textContent;
      operation = '%';
      firstpoint = false;
      op = true;
    }
    operation = '%';
    firstpoint = false;
    solve();
  };
  equal.onclick = function (e) {
    operatorb = result.textContent;
    op = false;
    solve();
  };
}
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
