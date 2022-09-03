var tvRemote = function(word) {
    let buttonPresses = 0
    let currentState = [0,0]
    
    let keyboard = [['a','b','c','d','e','1','2','3'],
                    ['f','g','h','i','j','4','5','6'],
                    ['k','l','m','n','o','7','8','9'],
                    ['p','q','r','s','t','.','@','0'],
                    ['u','v','w','x','y','z','_','/']]
    
    Array.from(word).forEach(w =>{
      keyboard.forEach((f,n) =>{
        f.forEach((c,i)=>{
          if(w == c){
            buttonPresses += Math.abs((n-currentState[0])) + Math.abs((i - currentState[1])) + 1
            currentState = [n,i]
          }
        })
      })
    })
    
    return buttonPresses;
}