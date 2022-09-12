const test = require('./util/test');

function smallEnough(list, limit) {
  return list.every((number) => number <= limit);
}

test(smallEnough, [
  {
    input: [[66, 101], 200],
    answer: true,
  },
  {
    input: [[78, 117, 110, 99, 104, 117, 107, 115], 100],
    answer: false,
  },
  {
    input: [[101, 45, 75, 105, 99, 107], 107],
    answer: true,
  },
  {
    input: [[80, 117, 115, 104, 45, 85, 112, 115], 120],
    answer: true,
  },
]);
