function oddOrEven(array) {
  const arraySum = array.reduce((number, partialSum) => number + partialSum, 0);
  return arraySum % 2 === 0 ? "even" : "odd";
}
