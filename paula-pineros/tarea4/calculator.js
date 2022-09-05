//Add the button to the input
function writeInput(bef) {
  let expression = document.getElementById("Numero").value;
  expression += bef;
  document.getElementById("Numero").value = expression;
}
//Clean de input
function deleteC() {
  document.getElementById("Numero").value = "";
}
//Calculate the exponential
function exp(a, b) {
  return a ** b;
}
//Calculate the modulo
function mod(a, b) {
  return a % b;
}
//Calculate the divition
function div(a, b) {
  return a / b;
}
//Calculate the multiplication
function mult(a, b) {
  return a * b;
}
//Calculate the substraction
function sub(a, b) {
  return a - b;
}
//Calculate the add
function add(a, b) {
  return a + b;
}

function splitBySeparators(expression, separators) {
  let temporal = separators[0];
  for (let i = 1; i < separators.length; i++) {
    expression = expression.split(separators[i]).join(temporal);
  }
  expression = expression.split(temporal);
  return expression;
}

function splitFinal() {
  let expression = document.getElementById("Numero").value;
  let separators = ["^", "%", "/", "X", "-", "+"];
  let expressionInput = document.getElementById("Numero").value;
  let expressionSplit = splitBySeparators(expression, separators);
  let size = expressionSplit.length;
  let len = 0;
  let expressionFull = [];
  for (let i = 0; i < size; i++) {
    expressionSplit[i] = parseFloat(expressionSplit[i]);
    expressionFull.push(expressionSplit[i]);
    len += ("" + expressionSplit[i]).length;
    expressionFull.push(expressionInput[len]);
    len += 1;
  }
  return expressionFull;
}

function operate(symbol, pieces){
  let size = pieces.length;
  let temporal;
  for(let i = 0; i < size; i++){
    if (pieces[i] == symbol) {
      if (pieces[i] == "^") {
        temporal = exp(pieces[i - 1], pieces[i + 1]);
      }else if (pieces[i] == "X") {
        temporal = mult(pieces[i - 1], pieces[i + 1]);
      }else if (pieces[i] == "/") {
        temporal = div(pieces[i - 1], pieces[i + 1]);
      }else if (pieces[i] == "%") {
        temporal = mod(pieces[i - 1], pieces[i + 1]);
      }else if (pieces[i] == "+") {
        temporal = add(pieces[i - 1], pieces[i + 1]);
      }else if (pieces[i] == "-") {
        temporal = sub(pieces[i - 1], pieces[i + 1]);
      }
      pieces[i - 1] = temporal;
      pieces.splice(i, 2);
      i--;
    }
  }
}
//Calculate the total
function total() {
  let pieces = splitFinal();
  pieces.pop();
  operate("^", pieces);
  operate("X", pieces);
  operate("/", pieces);
  operate("%", pieces);
  operate("+", pieces);
  operate("-", pieces);
  document.getElementById("Numero").value = "";
  document.getElementById("Numero").value = pieces[0];
}
