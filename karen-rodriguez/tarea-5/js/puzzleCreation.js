let puzzleContainer = document.getElementById("puzzleContainer")

export function createPuzzle(){
   
    for(let i=0;i<9;i++){
        let box = document.createElement("div")    
        box.classList.add("box"+i)
        box.id='box'+i
        puzzleContainer.appendChild(box)
    }
    
}