const arrayNumber = [1, 2, 5, 2, 89, 1, 89];
const arrayName = [
  "ana",
  "lucia",
  "andres",
  "lucia",
  "andres",
  "carlos",
  "carlos",
];
let duplicate = [];

const temporaryArray = [...arrayNumber.sort()];
for (let i = 0; i < temporaryArray.length; i++) {
  if (temporaryArray[i + 1] === temporaryArray[i]) {
    duplicate.push(temporaryArray[i]);
  }
}
