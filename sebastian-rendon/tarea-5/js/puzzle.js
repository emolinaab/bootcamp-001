export default class Puzzle {
  /**
   *
   * @param {number} gridSize
   * @param {Map<string|number, Object>} pieces
   */
  constructor(gridSize) {
    this.gridSize = Number.isNaN(gridSize) ? 3 : Math.max(3, gridSize);
    this.pieces = new Map();
  }

  createPuzzleMap() {
    this.pieces.set('empty', {
      number: 0,
      position: this.gridSize * this.gridSize - 1,
    });

    for (let i = 1; i < this.gridSize * this.gridSize; i++) {
      this.pieces.set(i, {
        number: i,
        position: i - 1,
      });
    }
    console.log(this.pieces);
  }

  shuffle() {
    const randomPositions = Array.from(this.pieces.values())
      .map((piece) => piece.position)
      .sort(() => Math.random() - 0.5);

    for (const [_key, piece] of this.pieces) {
      piece.position = randomPositions.pop();
    }
  }

  checkSolution() {
    for (const [_key, piece] of this.pieces) {
      if (piece.number === 0) continue;
      if (piece.position !== piece.number - 1) return false;
    }
    return true;
  }

  exchangePositions(piece1, piece2) {
    const piece1Pos = piece1.position;
    const piece2Pos = piece2.position;

    piece2.position = piece1Pos;
    piece1.position = piece2Pos;
  }

  canMovePiece(piece, emptyPiece) {
    const adjacentPositions = this.getAdjacentPositions(piece);

    if (adjacentPositions.includes(emptyPiece.position)) return true;
    return false;
  }

  getAdjacentPositions(originPiece) {
    const gridSize = this.gridSize;
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
}

class PuzzlePiece {
  constructor(number, position, imgSrc = '') {
    this.number = number;
    this.position = position;
    this.imgSrc = imgSrc;
  }
}
