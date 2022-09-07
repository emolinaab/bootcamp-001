const ordened = [
  [1 ,2 ,3 ,4 ],
  [5 ,6 ,7 ,8 ],
  [9 ,10,11,12],
  [13,14,15,  ],
];

const numbers = [
  [13,4 ,15,7 ],
  [14,1 ,9 ,11],
  [6 ,8 ,10,3 ],
  [5 ,2 ,12,  ],
];

function init(){
  const cell00 = document.getElementById('cell00'); 
  const cell01 = document.getElementById('cell01'); 
  const cell02 = document.getElementById('cell02');
  const cell03 = document.getElementById('cell03');
  const cell10 = document.getElementById('cell10');
  const cell11 = document.getElementById('cell11');
  const cell12 = document.getElementById('cell12');
  const cell13 = document.getElementById('cell13');
  const cell20 = document.getElementById('cell20');
  const cell21 = document.getElementById('cell21');
  const cell22 = document.getElementById('cell22');
  const cell23 = document.getElementById('cell23');
  const cell30 = document.getElementById('cell30');
  const cell31 = document.getElementById('cell31');
  const cell32 = document.getElementById('cell32');
  const cell33 = document.getElementById('cell33');

  numbers[
    [cell00.addEventListener('click', () => {
      click(0,0,'topLeftCorner');
    }), cell01.addEventListener('click', () => {
      click(0,1,'topEdge');
    }), cell02.addEventListener('click', () => {
      click(0,2,'topEdge');
    }), cell03.addEventListener('click', () => {
      click(0,3,'topRightCorner');
    })],

    [cell10.addEventListener('click', () => {
      click(1,0,'leftEdge');
    }), cell11.addEventListener('click', () => {
      click(1,1,'center');
    }), cell12.addEventListener('click', () => {
      click(1,2,'center');
    }), cell13.addEventListener('click', () => {
      click(1,3,'rightEdge');
    })],

    [cell20.addEventListener('click', () => {
      click(2,0,'leftEdge');
    }), cell21.addEventListener('click', () => {
      click(2,1,'center');
    }), cell22.addEventListener('click', () => {
      click(2,2,'center');
    }), cell23.addEventListener('click', () => {
      click(2,3,'rightEdge');
    })],

    [cell30.addEventListener('click', () => {
      click(3,0,'lowerLeftCorner');
    }), cell31.addEventListener('click', () => {
      click(3,1,'bottomEdge');
    }), cell32.addEventListener('click', () => {
      click(3,2,'bottomEdge');
    }), cell33.addEventListener('click', () => {
      click(3,3,'lowerRightCorner');
    })]
  ];
}

/*
  * @Param i, j Origin
  * @Param i, j Destinty
  * This method changes two values in an array
*/
function changeValues (iOrigin, jOrigin, iDestiny, jDestiny) {
  const val = numbers[iOrigin][jOrigin];
  numbers[iOrigin][jOrigin] = numbers[iDestiny][jDestiny];         
  numbers[iDestiny][jDestiny] = val;    
  refesh();
}

/*
  * Update cells based on array values
*/
function refesh() {
  let tmp = 0 ;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[0].length; j++) {
      if (numbers[i][j] === ordened[i][j]) {
        tmp++;
      } 
    }
  }

  if (tmp === 16) {
    alert('You Won. Now the page will reload.');
    location.reload();
  } else {
    let str = '';
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers[0].length; j++) {
        str = numbers[i][j];
        if (str === undefined) {
          document.getElementById('cell' + i + '' + j).innerHTML = '';
        } else {
          document.getElementById('cell' + i + '' + j).innerHTML = numbers[i][j];
        }
      }
    }
  } 
}

function click (originI, originJ, kind) {
  if (kind === 'bottomEdge') {
    right(originI, originJ);
    left(originI, originJ);
    above(originI, originJ);
  } else if (kind === 'center') {
    right(originI, originJ);
    left(originI, originJ);
    above(originI, originJ);
    below(originI, originJ);
  } else if (kind === 'leftEdge') {
    right(originI, originJ);
    above(originI, originJ);
    below(originI, originJ);
  } else if (kind === 'rightEdge') {
    left(originI, originJ);
    above(originI, originJ);
    below(originI, originJ);
  } else if (kind === 'topEdge') {
    right(originI, originJ);
    left(originI, originJ);
    below(originI, originJ);
  } else if (kind === 'lowerRightCorner') {
    left(originI, originJ);
    above(originI, originJ);
  } else if (kind === 'lowerLeftCorner') {
    right(originI, originJ);
    above(originI, originJ);
  } else if (kind === 'topRightCorner') {
    left(originI, originJ);
    below(originI, originJ);
  } else if (kind === 'topLeftCorner') {
    right(originI, originJ);
    below(originI, originJ);
  }
}

function right (originI, originJ) {
  if (numbers[originI][originJ + 1] === undefined) {          //Asks if the cell to its right is empty
    changeValues(originI,originJ,  originI,originJ + 1); 
  }
}

function left (originI, originJ) {
  if (numbers[originI][originJ - 1] === undefined) {         //Asks if the cell to its left is empty
    changeValues(originI,originJ,  originI,originJ - 1); 
  }
}

function above (originI, originJ) {
  if (numbers[originI - 1][originJ] === undefined) { //Ask if the cell above is empty
    changeValues(originI,originJ,  originI - 1,originJ);
  }
}

function below (originI, originJ) {
  if (numbers[originI + 1][originJ] == undefined) {  //Ask if the cell below is empty
    changeValues(originI,originJ,  originI + 1,originJ);
  }
}