const test = require('./util/test');

function getOlympicRings(text) {
  let score = 0;
  const lookup = {
    a: 1,
    A: 1,
    b: 1,
    B: 2,
    d: 1,
    D: 1,
    e: 1,
    g: 1,
    o: 1,
    O: 1,
    p: 1,
    P: 1,
    q: 1,
    Q: 1,
    R: 1,
  };

  for (let i = 0; i < text.length; i++) {
    score += lookup[text.charAt(i)] || 0;
  }

  score = Math.floor(score / 2);

  if (score > 3) return 'Gold!';
  if (score > 2) return 'Silver!';
  if (score > 1) return 'Bronze!';
  return 'Not even a medal!';
}

test(getOlympicRings, [
  {
    input: ['wHjMudLwtoPGocnJ'],
    answer: 'Bronze!',
  },
  {
    input: ['eCEHWEPwwnvzMicyaRjk'],
    answer: 'Bronze!',
  },
  {
    input: ['JKniLfLW'],
    answer: 'Not even a medal!',
  },
]);
