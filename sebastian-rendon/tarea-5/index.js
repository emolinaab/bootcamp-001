let puzzle = {
  gridSize: 3,
  pieces: null,
  element: null,
};

function setup() {
  const sizeFormEl = document.getElementById('size-form');
  sizeFormEl.addEventListener('submit', onSizeFormSubmit);

  const playAgainBtn = document.getElementById('play-again-btn');
  playAgainBtn.addEventListener('click', onPlayAgainBtnClick);
}

function onSizeFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const size = Number.parseInt(formData.get('size'));

  createPuzzleMap(Number.isNaN(size) || size < 3 ? 3 : size);
  mountPuzzleElement();
}

function onPlayAgainBtnClick() {
  const puzzleEl = puzzle.element;
  puzzleEl.classList.remove('puzzle__body--visible');

  const formEl = document.getElementById('size-form');
  formEl.classList.remove('size-form--hidden');

  const victoryEl = document.getElementById('victory-message');
  victoryEl.classList.remove('victory--open');
}

function createPuzzleMap(squareDimension) {
  puzzle = {
    gridSize: squareDimension,
    element: document.getElementById('puzzle'),
    pieces: new Map(),
  };

  puzzle.pieces.set('empty', {
    number: 0,
    position: squareDimension * squareDimension - 1,
  });

  for (let i = 1; i < squareDimension * squareDimension; i++) {
    puzzle.pieces.set(i, {
      number: i,
      position: i - 1,
    });
  }
}

function mountPuzzleElement() {
  shuffle();
  mountPuzzlePieceElements();

  const puzzleEl = puzzle.element;
  puzzleEl.classList.add('puzzle__body--visible');
  puzzleEl.style.width = `${puzzle.gridSize * 5.5}rem`;
  puzzleEl.style.height = `${puzzle.gridSize * 5.5}rem`;

  const formEl = document.getElementById('size-form');
  formEl.classList.add('size-form--hidden');
}

function mountPuzzlePieceElements() {
  puzzle.element.innerHTML = '';
  for (const [key, piece] of puzzle.pieces) {
    const pieceEl = document.createElement('div');
    pieceEl.setAttribute('data-key', piece.number);
    translatePiece(piece, pieceEl);

    if (key === 'empty') {
      pieceEl.classList.add('puzzle__tile', 'puzzle__tile--empty');
    } else {
      pieceEl.innerHTML = `${piece.number}`;
      pieceEl.classList.add('puzzle__tile');
      pieceEl.addEventListener('click', (e) => updatePiecePosition(e.target));
    }
    puzzle.element.appendChild(pieceEl);
  }
}

function updatePiecePosition(pieceEl) {
  const pieceKey = Number.parseInt(pieceEl.dataset.key);
  const emptyPieceEl = document.querySelector('.puzzle__tile--empty');

  const piece = puzzle.pieces.get(pieceKey);
  const emptyPiece = puzzle.pieces.get('empty');

  if (canMovePiece(piece, emptyPiece)) {
    exchangePositions(piece, emptyPiece);
    translatePiece(piece, pieceEl);
    translatePiece(emptyPiece, emptyPieceEl);

    const victoryEl = document.getElementById('victory-message');
    if (checkSolution()) {
      victoryEl.classList.add('victory--open');
    } else {
      victoryEl.classList.remove('victory--open');
    }
  } else {
    shake(piece, pieceEl);
  }
}

function canMovePiece(piece, emptyPiece) {
  const adjacentPositions = getAdjacentPositions(piece);

  if (adjacentPositions.includes(emptyPiece.position)) return true;
  return false;
}

function shake(piece, element) {
  const gridSize = puzzle.gridSize;

  element.style = `transform: translate(${
    (piece.position % gridSize) * 5.5 - 0.25
  }rem, ${Math.floor(piece.position / gridSize) * 5.5}rem)`;
  setTimeout(() => {
    element.style = `transform: translate(${
      (piece.position % gridSize) * 5.5 + 0.25
    }rem, ${Math.floor(piece.position / gridSize) * 5.5}rem)`;
  }, 200);
  setTimeout(() => {
    element.style = `transform: translate(${
      (piece.position % gridSize) * 5.5
    }rem, ${Math.floor(piece.position / gridSize) * 5.5}rem)`;
  }, 400);
}

function exchangePositions(piece1, piece2) {
  const piece1Pos = piece1.position;
  const piece2Pos = piece2.position;

  piece2.position = piece1Pos;
  piece1.position = piece2Pos;
}

function translatePiece(piece, element) {
  const gridSize = puzzle.gridSize;
  element.style = `transform: translate(${
    (piece.position % gridSize) * 5.5
  }rem, ${Math.floor(piece.position / gridSize) * 5.5}rem)`;
  element.setAttribute('data-pos', piece.position);
}

function getAdjacentPositions(originPiece) {
  const gridSize = puzzle.gridSize;
  const adjacentPositions = [];

  if (originPiece.position % gridSize !== 0) {
    adjacentPositions.push(originPiece.position - 1);
  }
  if (originPiece.position % gridSize !== gridSize - 1) {
    adjacentPositions.push(originPiece.position + 1);
  }
  if (originPiece.position / gridSize >= 1) {
    adjacentPositions.push(originPiece.position - gridSize);
  }
  if (originPiece.position / gridSize <= gridSize - 1) {
    adjacentPositions.push(originPiece.position + gridSize);
  }
  return adjacentPositions;
}

function shuffle() {
  const randomPositions = Array.from(puzzle.pieces.values())
    .map((piece) => piece.position)
    .sort(() => Math.random() - 0.5);

  for (const [_key, piece] of puzzle.pieces) {
    piece.position = randomPositions.pop();
  }
}

function checkSolution() {
  for (const [_key, piece] of puzzle.pieces) {
    if (piece.number === 0) continue;
    if (piece.position !== piece.number - 1) return false;
  }
  return true;
}

window.onload = setup;
