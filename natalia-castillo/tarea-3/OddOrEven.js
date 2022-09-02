function oddOrEven(array) {
    let add = array.reduce((a, b) => a + b, 0);
    if(add%2 == 0){
      return 'even';
    }else{
      return 'odd';
    }
  }