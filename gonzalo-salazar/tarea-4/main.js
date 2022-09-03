function init() {
  const result = document.getElementById("result");
  const reset = document.getElementById("reset");
  const addition = document.getElementById("addition");
  const subtraction = document.getElementById("subtraction");
  const multiplication = document.getElementById("multiplication");
  const division = document.getElementById("division");
  const equal = document.getElementById("equal");
  const one = document.getElementById("one");
  const two = document.getElementById("two");
  const three = document.getElementById("three");
  const four = document.getElementById("four");
  const five = document.getElementById("five");
  const six = document.getElementById("six");
  const seven = document.getElementById("seven");
  const eight = document.getElementById("eight");
  const nine = document.getElementById("nine");
  const zero = document.getElementById("zero");

  let operating_a;
  let operating_b;
  let operation;

  one.addEventListener("click", (e) => {
    result.textContent = result.textContent + "1";
  });

  two.addEventListener("click", (e) => {
    result.textContent = result.textContent + "2";
  });

  three.addEventListener("click", (e) => {
    result.textContent = result.textContent + "3";
  });

  four.addEventListener("click", (e) => {
    result.textContent = result.textContent + "4";
  });

  five.addEventListener("click", (e) => {
    result.textContent = result.textContent + "5";
  });

  six.addEventListener("click", (e) => {
    result.textContent = result.textContent + "6";
  });

  seven.addEventListener("click", (e) => {
    result.textContent = result.textContent + "7";
  });

  eight.addEventListener("click", (e) => {
    result.textContent = result.textContent + "8";
  });

  nine.addEventListener("click", (e) => {
    result.textContent = result.textContent + "9";
  });

  zero.addEventListener("click", (e) => {
    result.textContent = result.textContent + "0";
  });

  reset.addEventListener("click", (e) => {
    restart();
  });

  addition.addEventListener("click", (e) => {
    operating_a = parseFloat(result.textContent);
    operation = "+";
    clean_up();
  });

  subtraction.addEventListener("click", (e) => {
    operating_a = parseFloat(result.textContent);
    operation = "-";
    clean_up();
  });

  multiplication.addEventListener("click", (e) => {
    operating_a = parseFloat(result.textContent);
    operation = "*";
    clean_up();
  });

  division.addEventListener("click", (e) => {
    operating_a = parseFloat(result.textContent);
    operation = "/";
    clean_up();
  });

  equal.addEventListener("click", (e) => {
    operating_b = parseFloat(result.textContent);
    resolve();
  });

  const clean_up = () => (result.textContent = "");

  const restart = () => {
    result.textContent = "";
    operating_a = 0;
    operating_b = 0;
    operation = "";
  };

  const resolve = () => {
    let res = 0;
    switch (operation) {
      case "+":
        res = operating_a + operating_b;
        break;
      case "-":
        res = operating_a - operating_b;
        break;
      case "*":
        res = operating_a * operating_b;
        break;
      case "/":
        res = operating_a / operating_b;
        break;
    }
    restart();
    result.textContent = res;
  };
}
