function oddOrEven(array) {
    let add = 0;
    for(let i = 0; i<array.length; i++){
      add = add+array[i];
    }
    if(add%2 == 0){
      return 'even';
    }else{
      return 'odd';
    }
 }