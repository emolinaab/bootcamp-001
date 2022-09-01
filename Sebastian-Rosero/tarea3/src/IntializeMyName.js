
// const name = 'Juan manuel rodriguez' 

const name = 'Sebastián rosero Lopez'

function initializeNames(name){
    var arr = name.split(' ');
     for (var i = 1; i < arr.length - 1; i++) 
         arr[i] = arr[i].charAt(0) + '.';
     return arr.join(' ');
  }

const result = initializeNames(name);

console.log(result)