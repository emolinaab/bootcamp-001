function oddOrEven(array) {
   
    let array_num = 0;
    
    for (let i = 0; i < array.length; i++){
      
      array_num += array[i];
    }
    
    if(array_num % 2 == 0){
      return 'even';
    }else{
      return 'odd';
    }
  }