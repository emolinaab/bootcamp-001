const ordened = [
  [1 ,2 ,3 ,4 ],
  [5 ,6 ,7 ,8 ],
  [9 ,10,11,12],
  [13,14,15,  ],
];

const numbers = [
  [7 ,4 ,15,9 ],
  [12,10,3 ,14],
  [6 ,11,8 ,5 ],
  [1 ,2 ,13,  ],
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
    const c33 = numbers[3][3];               //Save the current value of the cell
    if (numbers[3][2] == undefined) {        //Asks if the cell to its left is empty
      numbers[3][3] = numbers[3][2];         //Assign empty to its value
      numbers[3][2] = c33;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[2][3] == undefined) { //Ask if the cell above is empty
      numbers[3][3] = numbers[2][3];         //Assign empty to its value
      numbers[2][3] = c33;                   //Assigns the previously saved value to the cell above
      refesh();
    }
  });

  cell32.addEventListener('click', () => {
    const c32 = numbers[3][2];               //Save the current value of the cell
    if (numbers[3][3] == undefined) {        //Asks if the cell to its right is empty
      numbers[3][2] = numbers[3][3];         //Assign empty to its value
      numbers[3][3] = c32;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[3][1] == undefined) { //Asks if the cell to its left is empty
      numbers[3][2] = numbers[3][1];         //Assign empty to its value
      numbers[3][1] = c32;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[2][2] == undefined) { //Ask if the cell above is empty
      numbers[3][2] = numbers[2][2];         //Assign empty to its value
      numbers[2][2] = c32;                   //Assigns the previously saved value to the cell above
      refesh();
    }
  });

  cell31.addEventListener('click', () => {
    const c31 = numbers[3][1];               //Save the current value of the cell
    if (numbers[3][2] == undefined) {        //Asks if the cell to its right is empty
      numbers[3][1] = numbers[3][2];         //Assign empty to its value
      numbers[3][2] = c31;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[3][0] == undefined) { //Asks if the cell to its left is empty
      numbers[3][1] = numbers[3][0];         //Assign empty to its value
      numbers[3][0] = c31;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[2][1] == undefined) { //Ask if the cell above is empty
      numbers[3][1] = numbers[2][1];         //Assign empty to its value
      numbers[2][1] = c31;                   //Assigns the previously saved value to the cell above
      refesh();
    }
  });
  
  cell30.addEventListener('click', () => {
    const c30 = numbers[3][0];               //Save the current value of the cell
    if (numbers[3][1] == undefined) {        //Asks if the cell to its right is empty
      numbers[3][0] = numbers[3][1];         //Assign empty to its value
      numbers[3][1] = c30;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[2][0] == undefined) { //Ask if the cell above is empty
      numbers[3][0] = numbers[2][0];         //Assign empty to its value
      numbers[2][0] = c30;                   //Assigns the previously saved value to the cell above
      refesh();
    }
  });

  cell23.addEventListener('click', () => {
    const c23 = numbers[2][3];               //Save the current value of the cell
    if (numbers[2][2] == undefined) {        //Asks if the cell to its left is empty
      numbers[2][3] = numbers[2][2];         //Assign empty to its value
      numbers[2][2] = c23;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[1][3] == undefined) { //Ask if the cell above is empty
      numbers[2][3] = numbers[1][3];         //Assign empty to its value
      numbers[1][3] = c23;                   //Assigns the previously saved value to the cell above
      refesh();
    } else if (numbers[3][3] == undefined) { //Ask if the cell below is empty
      numbers[2][3] = numbers[3][3];         //Assign empty to its value
      numbers[3][3] = c23;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });

  cell22.addEventListener('click', () => {
    const c22 = numbers[2][2];               //Save the current value of the cell
    if (numbers[2][3] == undefined) {        //Asks if the cell to its right is empty
      numbers[2][2] = numbers[2][3];         //Assign empty to its value
      numbers[2][3] = c22;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[2][1] == undefined) { //Asks if the cell to its left is empty
      numbers[2][2] = numbers[2][1];         //Assign empty to its value
      numbers[2][1] = c22;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[1][2] == undefined) { //Ask if the cell above is empty
      numbers[2][2] = numbers[1][2];         //Assign empty to its value
      numbers[1][2] = c22;                   //Assigns the previously saved value to the cell above
      refesh();
    } else if (numbers[3][2] == undefined) { //Ask if the cell below is empty
      numbers[2][2] = numbers[3][2];         //Assign empty to its value
      numbers[3][2] = c22;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });

  cell21.addEventListener('click', () => {
    const c21 = numbers[2][1];               //Save the current value of the cell
    if (numbers[2][2] == undefined) {        //Asks if the cell to its right is empty
      numbers[2][1] = numbers[2][2];         //Assign empty to its value
      numbers[2][2] = c21;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[2][0] == undefined) { //Asks if the cell to its left is empty
      numbers[2][1] = numbers[2][0];         //Assign empty to its value
      numbers[2][0] = c21;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[1][1] == undefined) { //Ask if the cell above is empty
      numbers[2][1] = numbers[1][1];         //Assign empty to its value
      numbers[1][1] = c21;                   //Assigns the previously saved value to the cell above
      refesh();
    } else if (numbers[3][1] == undefined) { //Ask if the cell below is empty
      numbers[2][1] = numbers[3][1];         //Assign empty to its value
      numbers[3][1] = c21;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });

  cell20.addEventListener('click', () => {
    const c20 = numbers[2][0];               //Save the current value of the cell
    if (numbers[2][1] == undefined) {        //Asks if the cell to its right is empty
      numbers[2][0] = numbers[2][1];         //Assign empty to its value
      numbers[2][1] = c20;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[1][0] == undefined) { //Ask if the cell above is empty
      numbers[2][0] = numbers[1][0];         //Assign empty to its value
      numbers[1][0] = c20;                   //Assigns the previously saved value to the cell above
      refesh();
    } else if (numbers[3][0] == undefined) { //Ask if the cell below is empty
      numbers[2][0] = numbers[3][0];         //Assign empty to its value
      numbers[3][0] = c20;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });

  cell13.addEventListener('click', () => {
    const c13 = numbers[1][3];               //Save the current value of the cell
    if (numbers[1][2] == undefined) {        //Asks if the cell to its left is empty
      numbers[1][3] = numbers[1][2];         //Assign empty to its value
      numbers[1][2] = c13;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[0][3] == undefined) { //Ask if the cell above is empty
      numbers[1][3] = numbers[0][3];         //Assign empty to its value
      numbers[0][3] = c13;                   //Assigns the previously saved value to the cell above
      refesh();
    } else if (numbers[2][3] == undefined) { //Ask if the cell below is empty
      numbers[1][3] = numbers[2][3];         //Assign empty to its value
      numbers[2][3] = c13;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });

  cell12.addEventListener('click', () => {
    const c12 = numbers[1][2];               //Save the current value of the cell
    if (numbers[1][3] == undefined) {        //Asks if the cell to its right is empty
      numbers[1][2] = numbers[1][3];         //Assign empty to its value
      numbers[1][3] = c12;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[1][1] == undefined) { //Asks if the cell to its left is empty
      numbers[1][2] = numbers[1][1];         //Assign empty to its value
      numbers[1][1] = c12;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[0][2] == undefined) { //Ask if the cell above is empty
      numbers[1][2] = numbers[0][2];         //Assign empty to its value
      numbers[0][2] = c12;                   //Assigns the previously saved value to the cell above
      refesh();
    } else if (numbers[2][2] == undefined) { //Ask if the cell below is empty
      numbers[1][2] = numbers[2][2];         //Assign empty to its value
      numbers[2][2] = c12;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });

  cell11.addEventListener('click', () => {
    const c11 = numbers[1][1];               //Save the current value of the cell
    if (numbers[1][2] == undefined) {        //Asks if the cell to its right is empty
      numbers[1][1] = numbers[1][2];         //Assign empty to its value
      numbers[1][2] = c11;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[1][0] == undefined) { //Asks if the cell to its left is empty
      numbers[1][1] = numbers[1][0];         //Assign empty to its value
      numbers[1][0] = c11;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[0][1] == undefined) { //Ask if the cell above is empty
      numbers[1][1] = numbers[0][1];         //Assign empty to its value
      numbers[0][1] = c11;                   //Assigns the previously saved value to the cell above
      refesh();
    } else if (numbers[2][1] == undefined) { //Ask if the cell below is empty
      numbers[1][1] = numbers[2][1];         //Assign empty to its value
      numbers[2][1] = c11;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });

  cell10.addEventListener('click', () => {
    const c10 = numbers[1][0];               //Save the current value of the cell
    if (numbers[1][1] == undefined) {        //Asks if the cell to its right is empty
      numbers[1][0] = numbers[1][1];         //Assign empty to its value
      numbers[1][1] = c10;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[0][0] == undefined) { //Ask if the cell above is empty
      numbers[1][0] = numbers[0][0];         //Assign empty to its value
      numbers[0][0] = c10;                   //Assigns the previously saved value to the cell above
      refesh();
    } else if (numbers[2][0] == undefined) { //Ask if the cell below is empty
      numbers[1][0] = numbers[2][0];         //Assign empty to its value
      numbers[2][0] = c10;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });

  cell03.addEventListener('click', () => {
    const c03 = numbers[0][3];               //Save the current value of the cell
    if (numbers[0][2] == undefined) {        //Asks if the cell to its left is empty
      numbers[0][3] = numbers[0][2];         //Assign empty to its value
      numbers[0][2] = c03;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[1][3] == undefined) { //Ask if the cell below is empty
      numbers[0][3] = numbers[1][3];         //Assign empty to its value
      numbers[1][3] = c03;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });

  cell02.addEventListener('click', () => {
    const c02 = numbers[0][2];               //Save the current value of the cell
    if (numbers[0][3] == undefined) {        //Asks if the cell to its right is empty
      numbers[0][2] = numbers[0][3];         //Assign empty to its value
      numbers[0][3] = c02;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[0][1] == undefined) { //Asks if the cell to its left is empty
      numbers[0][2] = numbers[0][1];         //Assign empty to its value
      numbers[0][1] = c02;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[1][2] == undefined) { //Ask if the cell below is empty
      numbers[0][2] = numbers[1][2];         //Assign empty to its value
      numbers[1][2] = c02;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });
  
  cell01.addEventListener('click', () => {
    const c01 = numbers[0][1];               //Save the current value of the cell
    if (numbers[0][2] == undefined) {        //Asks if the cell to its right is empty
      numbers[0][1] = numbers[0][2];         //Assign empty to its value
      numbers[0][2] = c01;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[0][0] == undefined) { //Asks if the cell to its left is empty
      numbers[0][1] = numbers[0][0];         //Assign empty to its value
      numbers[0][0] = c01;                   //Assigns the previously saved value to the cell to the left
      refesh();
    } else if (numbers[1][1] == undefined) { //Ask if the cell below is empty
      numbers[0][1] = numbers[1][1];         //Assign empty to its value
      numbers[1][1] = c01;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });

  cell00.addEventListener('click', () => {
    const c00 = numbers[0][0];               //Save the current value of the cell
    if (numbers[0][1] == undefined) {        //Asks if the cell to its right is empty
      numbers[0][0] = numbers[0][1];         //Assign empty to its value
      numbers[0][1] = c00;                   //Assigns the previously saved value to the cell to the right
      refesh();
    } else if (numbers[1][0] == undefined) { //Ask if the cell below is empty
      numbers[0][0] = numbers[1][0];         //Assign empty to its value
      numbers[1][0] = c00;                   //Assigns the previously saved value to the cell below
      refesh();
    }
  });
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