let matrix = null;

let positions = null;

let piecePosition = null;

let isDown = false;

let puzzleDimension = null;

const containerPosition = document
  .querySelector("#puzzle-container")
  .getBoundingClientRect();

const pieces = document.querySelectorAll(".puzzle-piece");

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

const move = (piece, direction) => {
  const row = parseInt(piece.getAttribute("row"));
  const col = parseInt(piece.getAttribute("col"));
  let movex = 0;
  let movey = 0;
  const wide = 100 / puzzleDimension;

  switch (direction) {
    case "right":
      movex += 1;
      break;
    case "left":
      movex += -1;
      break;
    case "up":
      movey += -1;
      break;
    case "down":
      movey += 1;
      break;
  }

  const destinyRow = row + movey;
  const destinyCol = col + movex;

  if (
    destinyRow < 0 ||
    destinyRow > puzzleDimension - 1 ||
    destinyCol < 0 ||
    destinyCol > puzzleDimension - 1
  ) {
    piece.style.top = (wide * row).toString() + "%";
    piece.style.left = (wide * col).toString() + "%";
  } else if (matrix[destinyRow][destinyCol] === null) {
    matrix[row][col] = null;
    matrix[destinyRow][destinyCol] = piece;
    piece.style.top = (wide * destinyRow).toString() + "%";
    piece.style.left = (wide * destinyCol).toString() + "%";
    piece.setAttribute("row", destinyRow);
    piece.setAttribute("col", destinyCol);
  } else {
    piece.style.top = (wide * row).toString() + "%";
    piece.style.left = (wide * col).toString() + "%";
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

    piece.style.top = wide * position[0] + "%";
    piece.style.left = wide * position[1] + "%";
    piece.style.height = wide + "%";
    piece.style.width = wide + "%";
    piece.innerHTML = `<p>${i + 1}</p>`;

    matrix[position[0]][position[1]] = piece;
    piece.addEventListener("mousemove", handleMousemove);
    piece.addEventListener("mousedown", handleMousedown);
    piece.addEventListener("mouseup", handleMouseup);
    puzzleContainer.appendChild(piece);
  }
};

const startGame = (dimension) => {
  setDimensions(dimension);
  createPuzzleBase(dimension);
  createPieces(dimension);
};

startGame(5);
