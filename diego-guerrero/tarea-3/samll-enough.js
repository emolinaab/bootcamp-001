function smallEnough(a, limit){

    let check;
    
    for(i=0; i < a.length; i++){
      
      if(a[i]<= limit){
        check = true;
      }else{
        check = false;
        
        break;
      }
    }
    
    return check;
  }