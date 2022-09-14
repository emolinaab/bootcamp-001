const test = require('./util/test');

function getBinary(a, b) {
  return (a + b).toString(2);
}

test(getBinary, [
  { input: [1, 2], answer: '11' },
  { input: [1, 1], answer: '10' },
  { input: [5, 9], answer: '1110' },
]);
