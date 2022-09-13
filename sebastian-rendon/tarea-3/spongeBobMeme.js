const test = require('./util/test');

function getSpongeBobMeme(phrase) {
  return phrase
    .split('')
    .map((char, i) => (!!(i % 2) ? char.toLowerCase() : char.toUpperCase()))
    .join('');
}

test(getSpongeBobMeme, [
  {
    input: ['stop Making spongebob Memes!'],
    answer: 'StOp mAkInG SpOnGeBoB MeMeS!',
  },
  {
    input: ['I told you to stop making those memes!!'],
    answer: 'I ToLd yOu tO StOp mAkInG ThOsE MeMeS!!',
  },
]);
