let operating1;
let operating2;
let operation;
let decimal1 = false;
let decimal2 = false;
let operatorSelected = false;

function init(){
  let result = document.getElementById('result');

  let clear = document.getElementById('clearButton');
  let percentage = document.getElementById('percentage');
  let division = document.getElementById('division');

  let seven = document.getElementById('seven');
  let eight = document.getElementById('eight');
  let nine = document.getElementById('nine');
  let multiplication = document.getElementById('multiplication');

  let four = document.getElementById('four');
  let five = document.getElementById('five');
  let six = document.getElementById('six');
  let subtraction = document.getElementById('subtraction');

  let one = document.getElementById('one');
  let two = document.getElementById('two');
  let three = document.getElementById('three');
  let addition = document.getElementById('addition');

  let zero = document.getElementById('zero');
  let point = document.getElementById('point');
  let equal = document.getElementById('equal');

  one.addEventListener('click', () => {
    if (result.textContent === '0') {
      result.textContent = '1';
    } else {
      result.textContent = result.textContent + '1';
    }
  });
  

  two.addEventListener('click', () => {
    if (result.textContent === '0') {
      result.textContent = '2';
    } else {
      result.textContent = result.textContent + '2';
    }
  });

  three.addEventListener('click', () => {
    if (result.textContent === '0') {
      result.textContent = '3';
    } else {
      result.textContent = result.textContent + '3';
    }
  });

  four.addEventListener('click', () => {
    if (result.textContent === '0') {
      result.textContent = '4';
    } else {
      result.textContent = result.textContent + '4';
    }
  });

  five.addEventListener('click', () => {
    if (result.textContent === '0') {
      result.textContent = '5';
    } else {
      result.textContent = result.textContent + '5';
    }
  });

  six.addEventListener('click', () => {
    if (result.textContent === '0') {
      result.textContent = '6';
    } else {
      result.textContent = result.textContent + '6';
    }
  });

  seven.addEventListener('click', () => {
    if (result.textContent === '0') {
      result.textContent = '7';
    } else {
      result.textContent = result.textContent + '7';
    }
  });

  eight.addEventListener('click', () => {
    if (result.textContent === '0') {
      result.textContent = '8';
    } else {
      result.textContent = result.textContent + '8';
    }
  });

  nine.addEventListener('click', () => {
    if (result.textContent === '0') {
      result.textContent = '9';
    } else {
      result.textContent = result.textContent + '9';
    }
  });

  zero.addEventListener('click', () => {
    if (result.textContent !== '0') {
      result.textContent = result.textContent + '0';
    } 
  });

  point.addEventListener('click', () => {
    if(!decimal1){
      result.textContent = result.textContent + '.';
      decimal1 = true;
    } else if (operatorSelected) {
      if(!decimal2){
        result.textContent = result.textContent + '.';
        decimal2 = true;
      }
    }
  });

  clear.addEventListener('click', () => {
    reset();
  });

  division.addEventListener('click', () => {
    if (!operatorSelected) {
      operating1 = parseFloat(result.textContent);
      operation = '/';   
      cleanUp();
      operatorSelected = true;
    }
  });

  multiplication.addEventListener('click', () => {
    if (!operatorSelected) {
      operating1 = parseFloat(result.textContent);
      operation = '*';
      cleanUp();
      operatorSelected = true;
    }
  });

  subtraction.addEventListener('click', () => {
    if(result.textContent === '0') {
      result.textContent =  '-';
    } else {
      if (!operatorSelected && result.textContent !== '') {
        operating1 = parseFloat(result.textContent);
        operation = '-';
        cleanUp();
        operatorSelected = true;
      }
    }
  });

  addition.addEventListener('click', () => {
    if (!operatorSelected) {
      operating1 = parseFloat(result.textContent);
      operation = '+';
      cleanUp();
      operatorSelected = true;
    }
  });

  percentage.addEventListener('click', () => {
    if (!operatorSelected) {
      operating1 = parseFloat(result.textContent);
      operation = '%';
      cleanUp();
      operatorSelected = true;
    }
  });

  equal.addEventListener('click', () => {
    if (operatorSelected) {
      operating2 = result.textContent;
      if(operating1 !== '' && operating2 !== '') {
        operating2 = parseFloat(result.textContent);
        solve();
      } else if (operating1 !== '' && operating2 === '' && operation === '%') {
        solve();
      }
    }
  });
}

function cleanUp() {
  result.textContent = '';
}

function reset() {
  operating1 = 0;
  operating2 = 0;
  operation = '';
  decimal1 = false;
  decimal2 = false;
  operatorSelected = false;
  result.textContent = '0';
}

function solve() {
  var res = 0;
  switch(operation) {
    case '+':
      res = operating1 + operating2;
      break;
    case '-':
      res = operating1 - operating2;
      break;
    case '*':
      res = operating1 * operating2;
      break;
    case '/':
      res = operating1 / operating2;
      break;
    case '%':
      if (operating2 === '') {
        res = operating1/100;
        break;
      } else if (operating2 !== 0){
        res = operating1/100 * (operating2);
        break;
      }
  }
  reset();
  result.textContent = res + '';
}