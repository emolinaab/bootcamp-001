function oddOrEven(input) {
    
  return input.reduce((sum, index) => sum + index, 0) %2 == 0 ? "even" : "odd";
}
