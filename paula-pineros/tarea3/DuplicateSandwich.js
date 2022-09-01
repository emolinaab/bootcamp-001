function duplicate(array) {
  let length = array.length;
  let onRepeat = false;
  let i = 0;
  let inicio, final;
  while (onRepeat == false || i == length - 1) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] === array[j]) {
        onRepeat = true;
        inicio = j;
        final = i;
      }
    }
    i++;
  }
  const sandwich = [];
  length = final - inicio;
  for (i = inicio + 1; i < final; i++) {
    sandwich.push(array[i]);
  }
  return sandwich;
}
let array1 = [0, 1, 2, 3, 4, 5, 6, 1, 7, 8];
let array2 = ["None", "Hello", "Example", "hello", "None", "Extra"];
let array3 = [0, 0];
const sandwich = duplicate(array1); //Change to any other array
console.log(sandwich);
