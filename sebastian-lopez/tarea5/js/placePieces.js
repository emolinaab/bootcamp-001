export function randomizePieces(){
    let positions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    positions.sort(() => Math.random() - 0.5);

    let randomizedPositions = [];

    let block = []
    positions.forEach((n,i) =>{ 
        block.push(n)
        if(i == positions.length-1){
            block.push(16)
            randomizedPositions.push(block)
        }
        if((i + 1) % 4 == 0){
            randomizedPositions.push(block)
            block = []
        }
    })

    placePieces(randomizedPositions)
}


export function placePiecesInOrder(){
    placePieces([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])   
}

function placePieces(positions){
    let puzzle = document.querySelector("#puzzle")

    puzzle.innerHTML = ""

    let boxTemplate = document.querySelector("[data-box]")

    for(let i = 0; i < 4;i++){
        for(let c = 0; c < 4;c++) {
            if(positions[i][c] == 16){
                let blackDiv  = document.createElement("div")

                blackDiv.classList.add("black")
                blackDiv.id = `${c+1 }-${i+1}`
                blackDiv.style.gridColumnStart = c +1
                blackDiv.style.gridRowStart = i +1
                
                puzzle.appendChild(blackDiv)
            }else{
                let box = boxTemplate.content.cloneNode(true).children[0]

                box.id = `${c+1 }-${i+1}`
                box.style.backgroundImage = `url('./assets/${positions[i][c]}.png')`
                box.style.gridColumnStart = c+1
                box.style.gridRowStart = i+1
            
                puzzle.appendChild(box)
            }          
        }     
    }
}
