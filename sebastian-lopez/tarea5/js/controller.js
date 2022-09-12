import {randomizePieces,placePiecesInOrder} from './placePieces.js'
import {movePiece} from'./movement.js'
import * as win from './win.js'

placePiecesInOrder()


let playButton = document.querySelector("input[type='submit']")

playButton.addEventListener("click",() =>{
    playButton.disabled = true
    randomizePieces() 
    play()
})


function play(){
    let buttons  = document.querySelectorAll("button");

    buttons.forEach(button =>{
        button.addEventListener("click", () =>{
            movePiece(button.textContent,button.parentElement)
            if(win.isWinnerCheck()){
                win.execWinAnimation()
            }
        })
    })
}






