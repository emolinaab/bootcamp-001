const test = require('./util/test');

function isPokerHandFlush(hand) {
  let suit = hand[0].slice(-1);

  for (let i = 1; i < hand.length; i++) {
    if (suit !== hand[i].slice(-1)) return false;
  }

  return true;
}

test(isPokerHandFlush, [
  { input: [['AS', '3S', '9S', 'KS', '4S']], answer: true },
  { input: [['AD', '4S', '7H', 'KC', '5S']], answer: false },
  { input: [['AD', '4S', '10H', 'KC', '5S']], answer: false },
  { input: [['QD', '4D', '10D', 'KD', '5D']], answer: true },
  { input: [['10D', '4D', 'QD', 'KD', '5D']], answer: true },
]);
