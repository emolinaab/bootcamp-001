import {createPuzzle} from './puzzleCreation.js'
import {moveBox,check,shuffle} from './Puzzle.js'


createPuzzle()

var puzzleContainer = document.getElementById("puzzleContainer")
puzzleContainer.addEventListener("click",event=>moveBox(event))

document.getElementById("shuffle").addEventListener("click",()=>shuffle(true))
document.getElementById("organize").addEventListener("click",()=>shuffle(false))
document.getElementById("check").addEventListener("click",()=>check())
