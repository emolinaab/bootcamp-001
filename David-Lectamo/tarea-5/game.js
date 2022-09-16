const numbers = [
  [,,,],
  [,,,],
  [,,,],
  [,,,],
];

function init(){
  for(let i = 0; i < 4 ; i++) {
   for(let j = 0; j < 4; j++) {
    numbers[i][j] = document.getElementById(`cell${i}${j}`); 
    numbers[i][j].addEventListener('click', () => {
      click(i,j);
    });
   }
  }
}

/*
  * @Param i, j Origin
  * @Param i, j Destinty
  * This method changes two values in an array
*/
function changeValues (iOrigin, jOrigin, iDestiny, jDestiny) {
  const val = numbers[iOrigin][jOrigin].textContent;
  numbers[iOrigin][jOrigin].textContent = numbers[iDestiny][jDestiny].textContent;         
  numbers[iDestiny][jDestiny].textContent = val;    
  refesh();
}

/*
  * Update cells based on array values
*/
function refesh() {
  let str = '';
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[0].length; j++) {
      str = numbers[i][j].textContent;
      if (str === undefined) {
        document.getElementById('cell' + i + '' + j).innerHTML = '';
      } else {
        document.getElementById('cell' + i + '' + j).innerHTML = numbers[i][j].textContent;
      }
    }
  }
}

function click (originI, originJ) {
  right(originI, originJ);
  left(originI, originJ);
  above(originI, originJ);
  below(originI, originJ);
}

function right (originI, originJ) {
  try {
    if (numbers[originI][originJ + 1] !== undefined) {
      if (numbers[originI][originJ + 1].textContent === '') {          //Asks if the cell to its right is empty
        changeValues(originI,originJ,  originI,originJ + 1); 
      }
    }
  } catch (e) {}
}

function left (originI, originJ) {
  try {
    if (numbers[originI][originJ - 1 ] !== undefined ) {
      if (numbers[originI][originJ - 1].textContent === '') {         //Asks if the cell to its left is empty
        changeValues(originI,originJ,  originI,originJ - 1); 
      }
    }
  } catch (e) {}
}

function above (originI, originJ) {
  try {
    if (numbers[originI - 1][originJ] !== undefined ) {
      if (numbers[originI - 1][originJ].textContent === '') {        //Ask if the cell above is empty
        changeValues(originI,originJ,  originI - 1,originJ);
      }
    }
  } catch (e) {}
}

function below (originI, originJ) {
  try {
    if (numbers[originI + 1][originJ] !== undefined ) {
      if (numbers[originI + 1][originJ].textContent == '') {         //Ask if the cell below is empty
        changeValues(originI,originJ,  originI + 1,originJ);
      }
    }
  } catch (e) {}
}