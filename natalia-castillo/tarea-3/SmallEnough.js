function smallEnough(a, limit){
    let result;
    for(let i=0; i<a.length; i++){   
        if(a[i]<=limit){
          result=true;
        }else{
          result=false;
        }
    }
    return result;
  }