function olympicRing(a){
    let final = 0;
    a = a.split('');
    while(a.length>0){
      if(/[abdegopqADOPQR]/.test(a[0])){
        final++;
      }else if(/[B]/.test(a[0])){
        final+=2;
      }else{
        final+=0;
      }
      a.splice(0,1);
      console.log(a + '\n');
    }
    final = Math.floor(final/2);
    if(final === 2){
      return 'Bronze!';
    }else if(final === 3){
      return 'Silver!';
    }else if(final >= 4){
      return 'Gold!';
    }else{
      return 'Not even a medal!';
    }
  }