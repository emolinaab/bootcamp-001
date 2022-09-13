const test = require('./util/test');

function duplicateSandwich(iterable) {
  for (let i = 0; i < iterable.length; i++) {
    const j = iterable.lastIndexOf(iterable[i]);

    if (i !== j) return iterable.slice(i + 1, j);
  }

  return iterable;
}

test(duplicateSandwich, [
  {
    input: [[0, 1, 2, 3, 4, 5, 6, 1, 7, 8]],
    answer: [2, 3, 4, 5, 6],
  },
  {
    input: [['None', 'Hello', 'Example', 'hello', 'None', 'Extra']],
    answer: ['Hello', 'Example', 'hello'],
  },
  {
    input: [[0, 0]],
    answer: [],
  },
  {
    input: [[true, false, true]],
    answer: [false],
  },
  {
    input: ['example'],
    answer: 'xampl',
  },
]);
