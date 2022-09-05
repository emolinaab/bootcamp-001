function smallEnough(a, limit){
    let j=0;
    for(let i=0; i<=a.length-1;){
      if(a[i]>limit){
        j++;
        break;
      }else{
        i++;
      }
    }
    if(j==0){
      return true;
    }else{
      return false;
    }
  }