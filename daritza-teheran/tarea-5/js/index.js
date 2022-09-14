import {makeButton, makeCanvas, makeSection} from "./utils/makeElements.js";
import {Tile} from "./utils/tile.js";
import {shuffle, move, isSolved} from "./utils/board.js";

const sections = ["buttons", "content"];
const buttons = [{name: "Easy", value: 2}, 
                 {name: "Normal", value: 3}, 
                 {name: "Hard", value: 4}];

sections.map((s) => {
    makeSection(s)
});

buttons.map((e) => {
  makeButton(e); 
  const button = document.getElementById(e.name);
  button.addEventListener('click',()=>{
    init(e.value)
  })
});

makeCanvas()

let tiles, board, rowCols, tileSize, canvas, ctx, img;

function init(rC) {
  tiles=[], board=[], rowCols = rC,  img = new Image(), tileSize = 600 / rowCols;
  img.addEventListener('load', setupCanvas, false);
  img.src = 'https://images.pexels.com/photos/5274345/pexels-photo-5274345.jpeg?auto=compress&cs=tinysrgb&w=600';
  setupCanvas();
  setupBoard();
}
window.onload = init(2);


function setupCanvas() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.setAttribute("width", img.naturalWidth);
  canvas.setAttribute("height", img.naturalHeight)
  drawTiles();
}

function drawTiles() {
  ctx.clearRect(0, 0, canvas.width, canvas.width);
  for (let i = 0; i < rowCols; i++) {
    for (let j = 0; j < rowCols; j++) {
      let x = i * tileSize;
      let y = j * tileSize;
      let tileIndex = board[i + j * rowCols];
      if (tileIndex > -1) {
        ctx.drawImage(img,tiles[tileIndex].x,tiles[tileIndex].y,tileSize,
          tileSize,x,y,tileSize,tileSize
          );
        ctx.strokeRect(x, y, tileSize, tileSize);
      }
    }
  }
}

function setupBoard() {
  for (let i = 0; i < rowCols; i++) {
    for (let j = 0; j < rowCols; j++) {
      let x = i * tileSize;
      let y = j * tileSize;
      let index = i + j * rowCols;
      let tile = new Tile(index, x,y);
      board.push(index);
      tiles.push(tile);
    }
  }
  board.pop();
  board.push(-1);
  shuffle(board, rowCols);
  if (isSolved(board,tiles)) {shuffle(board, rowCols)};
}


canvas.onclick = ({ pageX, pageY }) => {
  let rect = canvas.getBoundingClientRect();
  let i = Math.floor((pageX - rect.left) / tileSize);
  let j = Math.floor((pageY - rect.top) / tileSize);
  move(i, j, board,rowCols);
  drawTiles();
  if (isSolved(board,tiles)){
    tiles.map((tile)=>{
      ctx.drawImage(img,tile.x,tile.y,tileSize,
        tileSize,tile.x,tile.y,tileSize,tileSize
        );
      ctx.strokeRect(tile.x, tile.y, tileSize, tileSize);
    });
    setTimeout(() =>{
      alert("Yeahhhh!");
    }, 500);
  }
}



