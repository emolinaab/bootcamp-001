"use strict";

// Small enough?
/*
function smallEnough(a, limit) {
  if (!(a instanceof Array))
    return console.error("An array is expected to be entered");
  const validate = a.find((element) => element > limit);
  return !(typeof validate === "number") ? true : false;
}

console.log(smallEnough(a, 200));
*/

// Odd or Even?
/*
function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let par = sum % 2 === 0;
  return par || array.length === 0 ? "even" : "odd";
}

console.log(oddOrEven([[0, 1, 5]]));
*/

// Simple string characters
/*
function returnList(string) {
  const upperCase = /[A-Z]/,
    lowerCase = /[a-z]/,
    numbers = /[0-9]/;
  let countUpperCase = 0,
    countLowerCase = 0,
    countNumbers = 0,
    countCharacter = 0;

  for (let i of string) {
    if (upperCase.test(i)) {
      countUpperCase++;
    } else if (lowerCase.test(i)) {
      countLowerCase++;
    } else if (numbers.test(i)) {
      countNumbers++;
    } else {
      countCharacter++;
    }
  }
  return [countUpperCase, countLowerCase, countNumbers, countCharacter];
}

console.log(returnList("1234567890"));
*/
