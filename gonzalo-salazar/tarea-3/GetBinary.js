let a = 10, b = 4;
let result = a + b;

const convertToBinary = (number) => {
  if (number > 0) {
    return convertToBinary(parseInt(number / 2)) + (number % 2);
  }
  return "el numero binario es: ";
};

console.log(`El decimal es: ${result}`, convertToBinary(result));
