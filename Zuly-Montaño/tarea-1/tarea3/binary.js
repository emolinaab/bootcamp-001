function addBinary(num1,num2 ) {
    result = "";
    number = num1 + num2;
    while (number > 0) {
      result = (number % 2) + result;
      number = Math.floor(number / 2);
    }
    return result;
  }