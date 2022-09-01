function addBinary(a, b) {
  result = "";
  number = a + b;
  while (number > 0) {
    result = (number % 2) + result;
    number = Math.floor(number / 2);
  }
  return result;
}
