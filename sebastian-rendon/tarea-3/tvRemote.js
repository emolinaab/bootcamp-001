const test = require('./util/test.js');

const ROW_LENGTH = 8;
const keyboard = 'abcde123fghij456klmno789pqrst.@0uvwxyz_/'.split('');

function getManhattanDistance(point1, point2) {
  return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
}

function getTvRemoteMoves(word) {
  const charArray = word.split('');
  const charPositions = charArray.map((char) => {
    const charIndex = keyboard.indexOf(char);
    const xPos = Math.floor(charIndex / ROW_LENGTH);
    const yPos = charIndex % ROW_LENGTH;

    return [xPos, yPos];
  });

  let distance = getManhattanDistance([0, 0], charPositions[0]) + 1;

  for (let i = 0; i < charPositions.length - 1; i++) {
    distance +=
      getManhattanDistance(charPositions[i], charPositions[i + 1]) + 1;
  }

  return distance;
}

test(getTvRemoteMoves, [
  { input: ['codewars'], answer: 36 },
  { input: ['does'], answer: 16 },
  { input: ['your'], answer: 23 },
  { input: ['solution'], answer: 33 },
  { input: ['work'], answer: 20 },
  { input: ['for'], answer: 12 },
  { input: ['these'], answer: 27 },
  { input: ['words'], answer: 25 },
]);
