function mineColor(file, rank) {
  
    ['','a','b','c','d','e','f','g','h'].forEach((l,i) =>{
      if(file == l){
        file = i 
      }
    })
    
    let isFileOdd = file % 2 != 0
    
    let isRankOdd = rank % 2 != 0
    
    if((isFileOdd && isRankOdd) || (!isFileOdd && !isRankOdd)){
      return "black"
    } else{
      return "white"
    }
  }