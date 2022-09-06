function toggleText(phrse){
  let result='';
  for(let i=0; i<phrse.length;++i){
    if(i%2==0){
      result+=phrse[i].toUpperCase();
    } else {
      result+=phrse[i].toLowerCase();
    }
  }
  return result;
}