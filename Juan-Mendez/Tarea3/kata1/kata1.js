/*----------------------Kata1(Largest pair sum in array)---------------------------------
Given a sequence of numbers, find the largest pair sum in the sequence.
https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
*/
function largestPairSum(numbers){
    let numbersArray = numbers;
    let length = numbersArray.length;
    let number1=numbersArray[0];
    let number2=numbersArray[0];
    let result=0;
    for (let i = 0; i < length; i++) {
      if (numbersArray[i] > number1 ){
        number1=numbersArray[i]; 
      }   
    } 
    for (let i = 0; i < length; i++) {
      if(numbersArray[i] > number2 && numbersArray[i] != number1 ){
        number2=numbersArray[i]; 
      }
    }
    result=number1+number2;
    console.log(result);
  }