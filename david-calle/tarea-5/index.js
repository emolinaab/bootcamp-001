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
    top: objectTop - mouseY,
    bottom: mouseY - objectBottom,
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

let piecePosition = null;
let isDown = false;

const handleMousemove = (event) => {
  if (!isDown) return;
  const containerPosition = document
    .querySelector("#puzzle-container")
    .getBoundingClientRect();
  const squareRadius = containerPosition.width / 6;

  event.target.style.position;
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
  event.target.style["z-index"] = 0;
  const mousePosition = getMousePosition();
  console.log(
    getDirection(
      piecePosition.left,
      piecePosition.right,
      piecePosition.top,
      piecePosition.bottom,
      mousePosition.x,
      mousePosition.y
    )
  );
  event.target.style.top =
    (33.33 * event.target.getAttribute("row")).toString() + "%";
  event.target.style.left =
    (33.33 * event.target.getAttribute("col")).toString() + "%";
  isDown = false;
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
