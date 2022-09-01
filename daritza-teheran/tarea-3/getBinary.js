function addBinary(a,b) {
    let n = a+b;
    let bin = "";
    while (Math.trunc(n/2)!=0) {    
      bin =`${bin}${n/2==0 ? "0" : "1"}`;
      n=n/2;
    }
    return(`${bin}${n/2==0 ? "0" : "1"}`);
  }