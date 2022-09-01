//https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript

function initializeNames(name){
  const array = name.split(" ");
  if (array.length === 2) {
    return name;
  } else {
    let str = array[0];
    for (let i = 1; i <= array.length - 1; i++) {
      if (array.length - 1 === i) {
        str += ' ' + array[i];
      } else {
        str += ' ' + array[i].slice(0, 1) + '.';
      }
    }
    return str;
  }
}