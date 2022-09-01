const array = [-4, -1, -4];

const oddOrEven = (array) => {
  let total = array.map((item) => item).reduce((prev, curr) => prev + curr, 0);
  return total % 2 === 0 ? "even" : "odd";
};

console.log(oddOrEven(array));
