var rows = 3;
var columns = 3;

var pickedTile;
var blankTile;

var attemps = 0;
let won = false;

var imageOrder = [];

imageOrder.push(1);
while (imageOrder.length != 9) {
  let x = Math.floor(Math.random() * 10);
  if (x > 1 && x != imageOrder.find((Element) => Element == x)) {
    imageOrder.push(x);
  }
}

window.onload = function () {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      let imageNumber = imageOrder.pop();
      tile.src = "./images/image_part_00" + imageNumber + ".jpg";

      //DRAG FUNCTIONALITIES
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);
      tile.addEventListener("click", onClick);

      document.getElementById("board").append(tile);
    }
  }
};

function dragStart() {
  currTile = this;
  console.log("current image");
}

function dragOver() {}

function dragEnter() {}

function dragLeave() {
  console.log("final image");
  otherTile = this;
}

function dragDrop() {}

function dragEnd() {
  if (won) {
    return;
  }
  if (!otherTile.src.includes("image_part_001.jpg")) {
    return;
  }

  let currCoords = currTile.id.split("-");
  let r1 = parseInt(currCoords[0]);
  let c1 = parseInt(currCoords[1]);

  let otherCoords = otherTile.id.split("-");
  let r2 = parseInt(otherCoords[0]);
  let c2 = parseInt(otherCoords[1]);

  let moveLeft = r1 == r2 && c2 == c1 - 1;
  let moveRight = r1 == r2 && c2 == c1 + 1;

  let moveUp = c1 == c2 && r2 == r1 - 1;
  let moveDown = c1 == c2 && r2 == r1 + 1;

  let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

  if (isAdjacent) {
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;
    attemps += 1;
    document.getElementById("turns").innerHTML = attemps;
    checkWin();
  }
}

function onClick() {
  if (won) {
    return;
  }
  Tile = this;
  let Coords = Tile.id.split("-");
  let r = parseInt(Coords[0]);
  let c = parseInt(Coords[1]);

  let horMove = [1];
  let vertMove = [1];

  if (r == 1) {
    vertMove = [0, 2];
  }
  if (c == 1) {
    horMove = [0, 2];
  }

  horMove.forEach(function (i) {
    checkedTile = document.getElementById(r + "-" + i);
    if (checkedTile.src.includes("image_part_001.jpg")) {
      let currImg = Tile.src;
      let otherImg = checkedTile.src;

      Tile.src = otherImg;
      checkedTile.src = currImg;
      attemps += 1;
      document.getElementById("turns").innerHTML = attemps;
    }
  });
  vertMove.forEach(function (j) {
    checkedTile = document.getElementById(j + "-" + c);
    if (checkedTile.src.includes("image_part_001.jpg")) {
      let currImg = Tile.src;
      let otherImg = checkedTile.src;

      Tile.src = otherImg;
      checkedTile.src = currImg;

      attemps += 1;
      document.getElementById("turns").innerHTML = attemps;
    }
  });
  checkWin();
}

function checkWin() {
  let index = 1;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      checkedTile = document.getElementById(i + "-" + j);
      if (!checkedTile.src.includes("image_part_00" + index + ".jpg")) {
        return;
      }
      index++;
    }
  }

  won = true;
  console.log(window.location.href)
  document.getElementById("0-0").src =
    window.location.href.replace(/index.html#/, "") + "./images/image_part_000.jpg";
  window.location.assign("#popup1");
}
