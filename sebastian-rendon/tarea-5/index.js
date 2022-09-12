function setup() {
  const DIM = 3;

  const puzzleElement = document.getElementById('puzzle');
  puzzleElement.style = `grid-template: repeat(${DIM}, 1fr) / repeat(${DIM}, 1fr)`;

  const puzzle = new Array(DIM * DIM - 1)
    .fill()
    .map((_v, i) => `${i + 1}`)
    .shuffle()
    .concat([0]);

  for (let i = 0; i < puzzle.length - 1; i++) {
    addPuzzlePieceElement(puzzleElement, puzzle[i], ['puzzle__piece']);
  }

  addPuzzlePieceElement(puzzleElement, ' ', [
    'puzzle__piece',
    'puzzle__piece--empty',
  ]);
}

function addPuzzlePieceElement(puzzleElement, content, classNames) {
  const pieceElement = document.createElement('div');
  pieceElement.classList.add(...classNames);
  pieceElement.innerHTML = `<span>${content}</span>`;

  puzzleElement.appendChild(pieceElement);
}

Array.prototype.shuffle = function () {
  return [...this].sort((_a, _b) => Math.random() - 0.5);
};

window.onload = setup;
