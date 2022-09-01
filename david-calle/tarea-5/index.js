let matrix = null;
let positions = null;
let piecePosition = null;
let isDown = false;
let puzzleDimension = null;

const containerPosition = document
  .querySelector("#puzzle-container")
  .getBoundingClientRect();

const getDirection = (
  objectLeft,
  objectRight,
  objectTop,
  objectBottom,
  mouseX,
  mouseY
) => {
  const distances = {
    right: mouseX - objectRight,
    left: objectLeft - mouseX,
    up: objectTop - mouseY,
    down: mouseY - objectBottom,
  };

  return Object.keys(distances).reduce((a, b) =>
    distances[a] > distances[b] ? a : b
  );
};

const getMousePosition = () => {
  let e = window.event;
  return {
    x: e.clientX,
    y: e.clientY,
  };
};

const setPiecePosition = (piece, top, left) => {
  piece.style.top = top;
  piece.style.left = left;
};

const isInsideTheMatrix = (row, col) => {
  return (
    row >= 0 &&
    row <= puzzleDimension - 1 &&
    col >= 0 &&
    col <= puzzleDimension - 1
  );
};

const move = (piece, direction) => {
  const row = parseInt(piece.getAttribute("row"));
  const col = parseInt(piece.getAttribute("col"));
  const wide = 100 / puzzleDimension;
  const movex = direction == "right" ? 1 : direction == "left" ? -1 : 0;
  const movey = direction == "down" ? 1 : direction == "up" ? -1 : 0;
  const destinyRow = row + movey;
  const destinyCol = col + movex;
  if (
    isInsideTheMatrix(destinyRow, destinyCol) &&
    matrix[destinyRow][destinyCol] === null
  ) {
    matrix[row][col] = null;
    matrix[destinyRow][destinyCol] = piece;
    setPiecePosition(
      piece,
      (wide * destinyRow).toString() + "%",
      (wide * destinyCol).toString() + "%"
    );
    piece.setAttribute("row", destinyRow);
    piece.setAttribute("col", destinyCol);
  } else {
    setPiecePosition(
      piece,
      (wide * row).toString() + "%",
      (wide * col).toString() + "%"
    );
  }
};

const checkVictory = () => {
  for (let i = 0; i < puzzleDimension; i++) {
    for (let j = 0; j < puzzleDimension; j++) {
      if (i + j === puzzleDimension * 2 - 2) break;
      if (!matrix[i][j]) return;
      if (matrix[i][j].getAttribute("number") != i * puzzleDimension + j + 1)
        return;
    }
  }
  alert("champion");
};

const handleMousemove = (event) => {
  if (!isDown) return;
  const squareRadius = containerPosition.width / (puzzleDimension * 2);
  const mousePosition = getMousePosition();
  event.target.style.top =
    mousePosition.y - containerPosition.top - squareRadius + "px";
  event.target.style.left =
    mousePosition.x - containerPosition.left - squareRadius + "px";
};

const handleMousedown = (event) => {
  event.target.style["z-index"] = 100;
  isDown = true;
  piecePosition = event.target.getBoundingClientRect();
};

const handleMouseup = (event) => {
  isDown = false;
  event.target.style["z-index"] = 0;
  const mousePosition = getMousePosition();
  move(
    event.target,
    getDirection(
      piecePosition.left,
      piecePosition.right,
      piecePosition.top,
      piecePosition.bottom,
      mousePosition.x,
      mousePosition.y
    )
  );
  checkVictory();
};

const setDimensions = (dimension) => {
  puzzleDimension = dimension;
};

const createPuzzleBase = (dimension) => {
  matrix = [];
  positions = [];
  for (let i = 0; i < dimension; i++) {
    matrix.push(new Array(dimension).fill(null));
    for (let j = 0; j < dimension; j++) {
      positions.push([i, j]);
    }
  }
};

const createPieces = (dimension) => {
  const piecesNumber = dimension ** 2 - 1;
  const puzzleContainer = document.querySelector("#puzzle-container");
  const wide = 100 / dimension;
  for (let i = 0; i < piecesNumber; i++) {
    const piece = document.createElement("div");
    const index = Math.floor(Math.random() * positions.length);
    const position = positions[index];
    positions.splice(index, 1);

    piece.setAttribute("row", position[0]);
    piece.setAttribute("col", position[1]);
    piece.setAttribute("number", i + 1);
    piece.setAttribute("class", "puzzle-piece");

    piece.addEventListener("mousemove", handleMousemove);
    piece.addEventListener("mousedown", handleMousedown);
    piece.addEventListener("mouseup", handleMouseup);

    piece.style.top = wide * position[0] + "%";
    piece.style.left = wide * position[1] + "%";
    piece.style.height = wide + "%";
    piece.style.width = wide + "%";
    const pieceNumber = document.createTextNode(i + 1);
    piece.appendChild(pieceNumber);

    matrix[position[0]][position[1]] = piece;
    puzzleContainer.appendChild(piece);
  }
};

const startGame = (dimension) => {
  document.querySelector("#puzzle-container").innerHTML = "";
  setDimensions(dimension);
  createPuzzleBase(dimension);
  createPieces(dimension);
};

startGame(3);
