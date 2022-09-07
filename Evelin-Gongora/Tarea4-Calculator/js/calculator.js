const buttonsNumbers = document.getElementsByName('data-number');
const buttonsOperation = document.getElementsByName('data-operation');
const buttonEqual = document.getElementsByName('data-equal')[0];
const buttonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var currentOperation = '';
var previousOperation = '';
var operation = undefined;

buttonsNumbers.forEach(function(button){
  button.addEventListener('click', function(){
    addNumber(button.innerText);
  })
});

buttonsOperation.forEach(function(button){
  button.addEventListener('click', function(){
    selectOperation(button.innerText);
  })
});

buttonEqual.addEventListener('click', function(){
  calculate();
  updateDisplay();
});

buttonDelete.addEventListener('click', function(){
  clear();
  updateDisplay();
});

function selectOperation(operator){
  if(currentOperation==='')return;
  if(previousOperation !==''){
    calculate();
  }
  operation =operator.toString();
  previousOperation = currentOperation;
  currentOperation = '';
}

function calculate(){
  var calculo;
  const previous = parseFloat(previousOperation);
  const current = parseFloat(currentOperation);
  if(isNaN(previous) || isNaN(current))return;
  switch(operation){
    case '+':
      calculo = previous + current;
      break;
    case '-':
      calculo = previous - current;
      break;
    case '*':
      calculo = previous * current;
      break;
    case '/':
      calculo = previous / current;
      break;
    default:
      return;
  }
  currentOperation = calculo;
  operation = undefined;
  previousOperation = '';
}

function addNumber(number){
  currentOperation = currentOperation.toString() + number.toString();
  updateDisplay();
}

function clear(){
  currentOperation = '';
  previousOperation = '';
  operation = undefined;
}

function updateDisplay(){
  result.value = currentOperation;
}

clear();
