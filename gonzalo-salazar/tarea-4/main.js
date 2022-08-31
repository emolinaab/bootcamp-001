let operating_a;
let operating_b;
let operation;

function init() {
  let result = document.getElementById("result");
  let reset = document.getElementById("reset");
  let addition = document.getElementById("addition");
  let subtraction = document.getElementById("subtraction");
  let multiplication = document.getElementById("multiplication");
  let division = document.getElementById("division");
  let equal = document.getElementById("equal");
  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let four = document.getElementById("four");
  let five = document.getElementById("five");
  let six = document.getElementById("six");
  let seven = document.getElementById("seven");
  let eight = document.getElementById("eight");
  let nine = document.getElementById("nine");
  let zero = document.getElementById("zero");

  one.onclick = function (e) {
    result.textContent = result.textContent + "1";
  };

  two.onclick = function (e) {
    result.textContent = result.textContent + "2";
  };

  three.onclick = function (e) {
    result.textContent = result.textContent + "3";
  };

  four.onclick = function (e) {
    result.textContent = result.textContent + "4";
  };

  five.onclick = function (e) {
    result.textContent = result.textContent + "5";
  };

  six.onclick = function (e) {
    result.textContent = result.textContent + "6";
  };

  seven.onclick = function (e) {
    result.textContent = result.textContent + "7";
  };

  eight.onclick = function (e) {
    result.textContent = result.textContent + "8";
  };

  nine.onclick = function (e) {
    result.textContent = result.textContent + "9";
  };

  zero.onclick = function (e) {
    result.textContent = result.textContent + "0";
  };

  reset.onclick = function (e) {
    restart();
  };

  addition.onclick = function (e) {
    operating_a = result.textContent;
    operation = "+";
    clean_up();
  };

  subtraction.onclick = function (e) {
    operating_a = result.textContent;
    operation = "-";
    clean_up();
  };

  multiplication.onclick = function (e) {
    operating_a = result.textContent;
    operation = "*";
    clean_up();
  };

  division.onclick = function (e) {
    operating_a = result.textContent;
    operation = "/";
    clean_up();
  };

  equal.onclick = function (e) {
    operating_b = result.textContent;
    resolve();
  };

  function clean_up() {
    result.textContent = "";
  }

  function restart() {
    result.textContent = "";
    operating_a = 0;
    operating_b = 0;
    operation = "";
  }

  function resolve() {
    let res = 0;
    switch (operation) {
      case "+":
        res = parseFloat(operating_a) + parseFloat(operating_b);
        break;
      case "-":
        res = parseFloat(operating_a) - parseFloat(operating_b);
        break;
      case "*":
        res = parseFloat(operating_a) * parseFloat(operating_b);
        break;
      case "/":
        res = parseFloat(operating_a) / parseFloat(operating_b);
        break;
    }
    restart();
    result.textContent = res;
  }
}
