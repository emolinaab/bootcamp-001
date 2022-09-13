import {makeButton, makeSection} from "./utils/makeElements.js";
import {Tile} from "./utils/tile.js";
import {shuffle, move, isSolved} from "./utils/board.js";

/* CREATE ELEMENTS */
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
    rowCols = e.value;
    tiles = [],
    board = [],
    tileSize = img.width / rowCols;
    setupBoard();
    drawTiles();
  })
});


/* CREATE CANVAS */
const content = document.getElementById("content");
const c = document.createElement("canvas");
c.setAttribute("id", "canvas");
content.appendChild(c);

/* SETUP IMAGE */
const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      img = new Image();

img.addEventListener('load', drawTiles, false);
img.src = 'https://images.pexels.com/photos/5274345/pexels-photo-5274345.jpeg?auto=compress&cs=tinysrgb&w=600';
canvas.setAttribute("width", img.naturalWidth);
canvas.setAttribute("height", img.naturalHeight)

/*  TILES CONFIG*/
let tiles = [],
  board = [],
  rowCols = 2,
  tileSize = img.width / rowCols;

setupBoard()


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
  console.log(board)
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



