/*----------------------Kata3(Binary Addition)---------------------------------
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.
https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
*/
function addBinary(a,b) {
    let resultDecimal = 0;
    let resultInvert = [];
    let resultBinary = [];
    let i = 0;
    resultDecimal = a + b;
    while (resultDecimal>0){
         resultInvert[i] = resultDecimal % 2;
         resultDecimal = resultDecimal/2;
         i++;
       }
    for ( let j = 0; j<20; j++ ){
     resultBinary[j] = (Math.trunc(resultInvert[j]));
    }
    resultBinary.reverse();
    console.log(resultBinary.join('').toString());
  }