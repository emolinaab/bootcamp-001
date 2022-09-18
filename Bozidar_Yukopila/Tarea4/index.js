var numvar = "";
var varnum1;
var varnum2;
var operand;
var num_restart = 0; 
const C = document.getElementById("C");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const AC = document.getElementById("AC");
const negativo = document.getElementById("negative");
const EXE = document.getElementById("EXE");
const num_but = document.getElementsByClassName("number");
const ope_but = document.getElementsByClassName("operands");


AC.addEventListener("click", () =>  {
  num1.innerHTML = "0";
  num2.innerHTML = "0";
  numvar = "";
  varnum1 = 0 ; 
  varnum2 = 0 ; 
});

negativo.addEventListener("click", () => {
  if (Number(numvar) >= 0 || numvar == "") {
    numvar = "-" + numvar;
  }
  num2.innerHTML = numvar;
});

for (let x = 0; x < num_but.length; x++) {
  num_but[x].addEventListener("click", () =>  {
    if (num_restart == 1 ) {
      num_restart = 0; 
      num1.innerHTML = 0;
      numvar=  "";
    }
    numvar = numvar + num_but[x].value;
    num2.innerHTML = numvar;
    varnum2 = Number(numvar);
  });
}

for (let x = 0; x < ope_but.length; x++) {
  ope_but[x].addEventListener("click",() =>  {
    if (numvar == "") {
      numvar = "0";
    }
    num_restart = 0;
    varnum1 = Number(numvar);
    num1.innerHTML = numvar + ope_but[x].value;
    operand = ope_but[x].value;
    num2.innerHTML = "0";
    numvar = "";
  });
}

C.addEventListener("click",() =>  {
  num2.innerHTML = "0";
  numvar = "";
});

EXE.addEventListener("click", () =>  {
  num_restart = 1;
  num1.innerHTML = num1.innerHTML + num2.innerHTML + "=";
  console.log (varnum1) ; 
  console.log (varnum2) ; 
  if (operand == "+") { varnum2 = varnum1 + varnum2; }
  else if (operand == "-") { varnum2 = varnum1 - varnum2; }
  else if (operand == "x") { varnum2 = varnum1 * varnum2; }
  else if (operand == "÷") { varnum2 = varnum1 / varnum2; }
  
  num2.innerHTML = String(varnum2);
  numvar = String(varnum2);

});