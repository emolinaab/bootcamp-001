function setResult(value) {
  document.getElementById("result").innerHTML = value;
}
function getResult() {
  return document.getElementById("result").innerHTML;
}

function add(key) {
  var result = getResult();
  if (result != "0" || isNaN(key)) setResult(result + key);
  else setResult(key);
}

function calc() {
  var result = eval(getResult());
  setResult(result);
}

function delAll() {
  setResult(0);
}

let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

toggleBtn.onclick = function () {
  body.classList.toggle("dark");
};
