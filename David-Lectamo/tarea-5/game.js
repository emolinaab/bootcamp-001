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

  cell33.addEventListener('click', () => {
    if (numbers[3][2] == undefined) {        //Asks if the cell to its left is empty
      changeValues(3,3,  3,2);
    } else if (numbers[2][3] == undefined) { //Ask if the cell above is empty
      changeValues(3,3,  2,3);
    }
  });

  cell32.addEventListener('click', () => {
    if (numbers[3][3] == undefined) {        //Asks if the cell to its right is empty
      changeValues(3,2,  3,3);                 
    } else if (numbers[3][1] == undefined) { //Asks if the cell to its left is empty
      changeValues(3,2,  3,1);      
    } else if (numbers[2][2] == undefined) { //Ask if the cell above is empty
      changeValues(3,2,  2,2);    
    }
  });

  cell31.addEventListener('click', () => {
    if (numbers[3][2] == undefined) {        //Asks if the cell to its right is empty
      changeValues(3,1,  3,2);
    } else if (numbers[3][0] == undefined) { //Asks if the cell to its left is empty
      changeValues(3,1,  3,0);
    } else if (numbers[2][1] == undefined) { //Ask if the cell above is empty
      changeValues(3,1,  2,1);
    }
  });
  
  cell30.addEventListener('click', () => {
    if (numbers[3][1] == undefined) {        //Asks if the cell to its right is empty
      changeValues(3,0,  3,1);
    } else if (numbers[2][0] == undefined) { //Ask if the cell above is empty
      changeValues(3,0,  2,0);
    }
  });

  cell23.addEventListener('click', () => {
    if (numbers[2][2] == undefined) {        //Asks if the cell to its left is empty
      changeValues(2,3,  2,2);
    } else if (numbers[1][3] == undefined) { //Ask if the cell above is empty
      changeValues(2,3,  1,3);
    } else if (numbers[3][3] == undefined) { //Ask if the cell below is empty
      changeValues(2,3,  3,3);
    }
  });

  cell22.addEventListener('click', () => {
    if (numbers[2][3] == undefined) {        //Asks if the cell to its right is empty 
      changeValues(2,2,  2,3);
    } else if (numbers[2][1] == undefined) { //Asks if the cell to its left is empty
      changeValues(2,2,  2,1);
    } else if (numbers[1][2] == undefined) { //Ask if the cell above is empty
      changeValues(2,2,  1,2);
    } else if (numbers[3][2] == undefined) { //Ask if the cell below is empty
      changeValues(2,2,  3,2);
    }
  });

  cell21.addEventListener('click', () => {
    if (numbers[2][2] == undefined) {        //Asks if the cell to its right is empty
      changeValues(2,1,  2,2);
    } else if (numbers[2][0] == undefined) { //Asks if the cell to its left is empty
      changeValues(2,1,  2,0);
    } else if (numbers[1][1] == undefined) { //Ask if the cell above is empty
      changeValues(2,1,  1,1);
    } else if (numbers[3][1] == undefined) { //Ask if the cell below is empty
      changeValues(2,1,  3,1);
    }
  });

  cell20.addEventListener('click', () => {
    if (numbers[2][1] == undefined) {        //Asks if the cell to its right is empty
      changeValues(2,0,  2,1);
    } else if (numbers[1][0] == undefined) { //Ask if the cell above is empty
      changeValues(2,0,  1,0);
    } else if (numbers[3][0] == undefined) { //Ask if the cell below is empty
      changeValues(2,0,  3,0);
    }
  });

  cell13.addEventListener('click', () => {
    if (numbers[1][2] == undefined) {        //Asks if the cell to its left is empty
      changeValues(1,3,  1,2);
    } else if (numbers[0][3] == undefined) { //Ask if the cell above is empty
      changeValues(1,3,  0,3);
    } else if (numbers[2][3] == undefined) { //Ask if the cell below is empty
      changeValues(1,3,  2,3);
    }
  });

  cell12.addEventListener('click', () => {
    if (numbers[1][3] == undefined) {        //Asks if the cell to its right is empty
      changeValues(1,2,  1,3);
    } else if (numbers[1][1] == undefined) { //Asks if the cell to its left is empty
      changeValues(1,2,  1,1);
    } else if (numbers[0][2] == undefined) { //Ask if the cell above is empty
      changeValues(1,2,  0,2);
    } else if (numbers[2][2] == undefined) { //Ask if the cell below is empty
      changeValues(1,2,  2,2);
    }
  });

  cell11.addEventListener('click', () => {
    if (numbers[1][2] == undefined) {        //Asks if the cell to its right is empty
      changeValues(1,1,  1,2);
    } else if (numbers[1][0] == undefined) { //Asks if the cell to its left is empty
      changeValues(1,1,  1,0);
    } else if (numbers[0][1] == undefined) { //Ask if the cell above is empty
      changeValues(1,1,  0,1);
    } else if (numbers[2][1] == undefined) { //Ask if the cell below is empty
      changeValues(1,1,  2,1);
    }
  });

  cell10.addEventListener('click', () => {
    if (numbers[1][1] == undefined) {        //Asks if the cell to its right is empty
      changeValues(1,0,  1,1);
    } else if (numbers[0][0] == undefined) { //Ask if the cell above is empty
      changeValues(1,0,  0,0);
    } else if (numbers[2][0] == undefined) { //Ask if the cell below is empty
      changeValues(1,0,  2,0);
    }
  });

  cell03.addEventListener('click', () => {
    if (numbers[0][2] == undefined) {        //Asks if the cell to its left is empty
      changeValues(0,3,  0,2);
    } else if (numbers[1][3] == undefined) { //Ask if the cell below is empty
      changeValues(0,3,  1,3);
    }
  });

  cell02.addEventListener('click', () => {
    if (numbers[0][3] == undefined) {        //Asks if the cell to its right is empty
      changeValues(0,2,  0,3);
    } else if (numbers[0][1] == undefined) { //Asks if the cell to its left is empty
      changeValues(0,2,  0,1);
    } else if (numbers[1][2] == undefined) { //Ask if the cell below is empty
      changeValues(0,2,  1,2);
    }
  });
  
  cell01.addEventListener('click', () => {
    if (numbers[0][2] == undefined) {        //Asks if the cell to its right is empty
      changeValues(0,1,  0,2);
    } else if (numbers[0][0] == undefined) { //Asks if the cell to its left is empty
      changeValues(0,1,  0,0);
    } else if (numbers[1][1] == undefined) { //Ask if the cell below is empty
      changeValues(0,1,  1,1);
    }
  });

  cell00.addEventListener('click', () => {
    if (numbers[0][1] == undefined) {        //Asks if the cell to its right is empty
      changeValues(0,0,  0,1);
    } else if (numbers[1][0] == undefined) { //Ask if the cell below is empty
      changeValues(0,0,  1,0);
    }
  });
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