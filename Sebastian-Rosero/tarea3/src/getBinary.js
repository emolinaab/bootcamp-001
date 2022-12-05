let a = 2, b = 2;
let response = a + b;

const convertToBinary = (number) => {
  if (number > 0) {
    return convertToBinary(parseInt(number / 2)) + (number % 2);
  }
  return "el numero binario es: ";
};

console.log(`decimal is: ${response}`, convertToBinary(response));