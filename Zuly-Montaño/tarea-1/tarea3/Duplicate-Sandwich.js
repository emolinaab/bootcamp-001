const arrayNumber = [3, 17, 2, 3, 7, 12, 22, 31];
const arrayFoods = [
  "Hod-dog",
  "fish",
  "spaghetti",
  "Salad",
  "Burger",
  "fish",
  "salad",
  "spaghetti",
  
];
let duplicate = [];

const myArray = [...arrayNumber.sort()];
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i + 1] === myArray[i]) {
    duplicate.push(myArray[i]);
  }
}