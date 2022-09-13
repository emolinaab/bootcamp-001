export function movePiece(direction,currentElement){
    let count = document.querySelector("#count")

    let position = currentElement.id.split("-")

    let id = direction == `→`? `${parseInt(position[0])+1}-${position[1]}`
    : direction == "←"? `${parseInt(position[0])-1}-${position[1]}`
    :direction == "↓"? `${position[0]}-${parseInt(position[1])+1}`
    :`${position[0]}-${parseInt(position[1])-1}`
    

    let nextElement = document.getElementById(id)

    let currentElementColumn =  currentElement.style.gridColumnStart
    let currentElementRow = currentElement.style.gridRowStart
    let currentElementId = currentElement.id

    if(nextElement && nextElement.classList.contains("black")){
        currentElement.style.gridColumnStart = nextElement.style.gridColumnStart
        currentElement.style.gridRowStart = nextElement.style.gridRowStart
        currentElement.id = nextElement.id

        count.textContent++

        nextElement.style.gridColumnStart = currentElementColumn
        nextElement.style.gridRowStart = currentElementRow
        nextElement.id = currentElementId
    }    
}