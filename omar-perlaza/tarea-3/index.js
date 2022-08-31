// exercise 1

let number = prompt("Enter number please!");

function OddorEven(number) {
  if (number % 2 == 0) {
    alert("this number is even :" + number);
  } else {
    alert("this number is odd :" + number);
  }
}

OddorEven(number);

//Simple string characters

let lower = 0;
let upper = 0;
let nums = 0;
let special = 0;

let string1 = prompt("Enter a string please!");

function simpleString(string1) {
  for (let i = 0; i < string1.length; i++) {
    if (/[0-9]/.test(string1[i])) {
      nums++;
    } else if (/[a-z]/.test(string1[i])) {
      lower++;
      console.log(lower);
    } else if (/[A-Z]/.test(string1[i])) {
      upper++;
      console.log(upper);
    } else {
      special++;
    }

    console.log(lower);
  }
  document.write("the Uppers is : " + upper + "<br/>");
  document.write("the Lower is : " + lower + "<br/>");
  document.write("the Numbers is : " + nums + "<br/>");
  document.write("the Specials is : " + special + "<br/>");
}

simpleString(string1);

/* ----------------Olympic Rings--------------------- */

window.addEventListener("load", () => {
  let circle = document.getElementById("Circle");
  let circles = circle.getContext("2d");

  circles.beginPath();
  circles.lineWidth = 10;
  circles.strokeStyle = "blue";
  circles.fill();
  circles.arc(60, 60, 50, 0, (Math.PI / 180) * 360, true);
  circles.stroke();

  circles.beginPath();
  circles.moveTo(230, 60);
  circles.arc(180, 60, 50, 0, (Math.PI / 180) * 360, true);
  circles.fillStyle = "rgba(255,255,0,0)";
  circles.fill();
  circles.lineWidth = 10;
  circles.strokeStyle = "rgb(35,34,35)";
  circles.stroke();

  circles.beginPath();
  circles.moveTo(350, 60);
  circles.arc(300, 60, 50, 0, (Math.PI / 180) * 360, true);
  circles.fillStyle = "rgba(255,255,0,0)";
  circles.fill();
  circles.lineWidth = 10;
  circles.strokeStyle = "rgb(238,50,78)";
  circles.stroke();

  circles.beginPath();
  circles.moveTo(170, 100);
  circles.arc(120, 100, 50, 0, (Math.PI / 180) * 265, true);
  circles.moveTo(90, 60);
  circles.arc(120, 100, 50, (Math.PI / 180) * 248, (Math.PI / 180) * 20, true);
  circles.fillStyle = "rgba(255,255,0,0)";
  circles.fill();
  circles.lineWidth = 10;
  circles.strokeStyle = "rgb(252,177,49)";
  circles.stroke();

  circles.beginPath();

  circles.moveTo(290, 100);
  circles.arc(240, 100, 50, 0, (Math.PI / 180) * 265, true);
  circles.moveTo(210, 60);
  circles.arc(240, 100, 50, (Math.PI / 180) * 248, (Math.PI / 180) * 20, true);
  circles.fillStyle = "rgba(255,255,0,0)";
  circles.fill();
  circles.lineWidth = 10;
  circles.strokeStyle = "rgb(0,157,87)";
  circles.stroke();
});
