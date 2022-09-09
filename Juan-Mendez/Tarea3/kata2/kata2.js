/*----------------------Kata2(Small enough? - Beginner)---------------------------------
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
You can assume all values in the array are numbers.
https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
*/
function smallEnough(a, limit){
    let length = a.length;
    let number=0;
    for (let i = 0; i < length; i++) {
      if(a[i]<=limit){
        number++;
      }else{
        number=0;
      }
    }
    if (number==length){
      console.log(true);
    }else{
      console.log(false);
    }
  }