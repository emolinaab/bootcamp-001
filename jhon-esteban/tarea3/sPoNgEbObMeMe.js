function spongeMeme(sentence) {

    let chain = ""
    
    for(i=0; i<sentence.length; i++){
      
     if(i%2 ==0){
       chain= chain+sentence.charAt(i).toUpperCase()
     }else{
       chain = chain+sentence.charAt(i).toLowerCase()
     }
    } 
    return chain
  }