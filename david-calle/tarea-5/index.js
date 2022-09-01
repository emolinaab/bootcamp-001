const matrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const positions = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
];

let piecePosition = null;

let isDown = false;

const containerPosition = document
  .querySelector("#puzzle-container")
  .getBoundingClientRect();

const squareRadius = containerPosition.width / 6;

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

  if (destinyRow < 0 || destinyRow > 2 || destinyCol < 0 || destinyCol > 2) {
    piece.style.top = (33.33 * row).toString() + "%";
    piece.style.left = (33.33 * col).toString() + "%";
  } else if (matrix[destinyRow][destinyCol] === null) {
    matrix[row][col] = null;
    matrix[destinyRow][destinyCol] = piece;
    piece.style.top = (33.33 * destinyRow).toString() + "%";
    piece.style.left = (33.33 * destinyCol).toString() + "%";
    piece.setAttribute("row", destinyRow);
    piece.setAttribute("col", destinyCol);
  } else {
    piece.style.top = (33.33 * row).toString() + "%";
    piece.style.left = (33.33 * col).toString() + "%";
  }
};

const handleMousemove = (event) => {
  if (!isDown) return;

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
};

const pieces = document.querySelectorAll(".puzzle-piece");

pieces.forEach((piece) => {
  const index = Math.floor(Math.random() * positions.length);
  let position = positions[index];
  positions.splice(index, 1);
  piece.setAttribute("row", position[0]);
  piece.setAttribute("col", position[1]);
  piece.style.top = (33.33 * position[0]).toString() + "%";
  piece.style.left = (33.33 * position[1]).toString() + "%";
  matrix[position[0]][position[1]] = piece;
  piece.addEventListener("mousemove", handleMousemove);
  piece.addEventListener("mousedown", handleMousedown);
  piece.addEventListener("mouseup", handleMouseup);
});
