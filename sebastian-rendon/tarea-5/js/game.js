import Puzzle from './puzzle.js';

export default class Game {
  /**
   *
   * @param {Puzzle} puzzle
   * @param {HTMLElement} element
   */
  constructor(puzzle = undefined, element = undefined) {
    this.puzzle = puzzle;
    this.element = element;
  }

  mountPuzzleElement() {
    this.mountPuzzlePieceElements();
    this.element.classList.add('puzzle__body--visible');
    this.element.style.width = `${this.puzzle.gridSize * 5.5}rem`;
    this.element.style.height = `${this.puzzle.gridSize * 5.5}rem`;

    const formEl = document.getElementById('size-form');
    formEl.classList.add('size-form--hidden');
  }

  mountPuzzlePieceElements() {
    this.element.innerHTML = '';
    for (const [key, piece] of this.puzzle.pieces) {
      const pieceEl = document.createElement('div');
      pieceEl.setAttribute('data-key', piece.number);
      this.translatePiece(piece, pieceEl);

      if (key === 'empty') {
        pieceEl.classList.add('puzzle__tile', 'puzzle__tile--empty');
      } else {
        pieceEl.innerHTML = `${piece.number}`;
        pieceEl.classList.add('puzzle__tile');
        pieceEl.addEventListener('click', (e) =>
          this.updatePiecePosition(e.target)
        );
      }
      this.element.appendChild(pieceEl);
    }
  }

  updatePiecePosition(pieceEl) {
    const pieceKey = Number.parseInt(pieceEl.dataset.key);
    const emptyPieceEl = document.querySelector('.puzzle__tile--empty');

    const piece = this.puzzle.pieces.get(pieceKey);
    const emptyPiece = this.puzzle.pieces.get('empty');

    if (this.puzzle.canMovePiece(piece, emptyPiece)) {
      this.puzzle.exchangePositions(piece, emptyPiece);
      this.translatePiece(piece, pieceEl);
      this.translatePiece(emptyPiece, emptyPieceEl);

      const victoryEl = document.getElementById('victory-message');
      if (this.puzzle.checkSolution()) {
        victoryEl.classList.add('victory--open');
      } else {
        victoryEl.classList.remove('victory--open');
      }
    } else {
      this.shake(piece, pieceEl);
    }
  }

  translatePiece(piece, element) {
    const gridSize = this.puzzle.gridSize;
    element.style = `transform: translate(${
      (piece.position % gridSize) * 5.5
    }rem, ${Math.floor(piece.position / gridSize) * 5.5}rem)`;
    element.setAttribute('data-pos', piece.position);
  }

  shake(piece, element) {
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
}
