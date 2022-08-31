function largestPairSum(numbers) {
  top = Math.max(numbers[0], numbers[1]);
  bottom = Math.min(numbers[0], numbers[1]);
  numbers = numbers.splice(2);
  numbers.forEach((number) => {
    if (number > top) {
      bottom = top;
      top = number;
    } else if (number > bottom) {
      bottom = number;
    }
  });
  return top + bottom;
}
