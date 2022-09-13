export function move(i, j, arr, rowCols) {
    let blank = findBlank(arr)
    let blankCol = blank % rowCols;
    let blankRow = Math.floor(blank / rowCols);
    
    if (isNeighbor(i, j, blankCol, blankRow)) {
      swap(blank, i + j * rowCols, arr);
    }
  }

export function shuffle(arr, rowCols) {
  for (let i = 0; i < 200; i++) {
    randomMove(arr, rowCols);
  }
}

function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



function randomMove(arr,rowCols) {
  let r1 = Math.floor(Math.random()*rowCols);
  let r2 = Math.floor(Math.random()*rowCols);
  move(r1, r2, arr, rowCols);
}

function isNeighbor(i, j, x, y) {
  if (i !== x && j !== y) {
    return false;
  }
  if (Math.abs(i - x) == 1 || Math.abs(j - y) == 1) {
    return true;
  }
  return false;
}

function findBlank(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i] == -1) return i;
  }
}

export function isSolved(board, tiles) {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] !== tiles[i].index) {
        return false;
      }
    }
    return true;
}