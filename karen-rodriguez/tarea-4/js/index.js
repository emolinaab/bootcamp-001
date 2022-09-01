import {createButtons} from './buttons/physic structure/buttonCreation.js'
import {numberButtons, operationButtons } from './buttons/physic structure/buttonInformation.js'
import { btnACOnclick,calculateOperationOnclick,btnDELOnclick} from './buttons/operation/buttonOperation.js'

//show calculator structure
let numberContainerBtn = document.getElementById("numberContainerBtn");
let operationsContainerBtn = document.getElementById("operationsContainerBtn")

createButtons(numberButtons,numberContainerBtn)
createButtons(operationButtons,operationsContainerBtn)



//write on the calculator
let showCharacterOnscreen =() =>{
    calculator.addEventListener("click",function(event){    
        if(event.target.classList.contains("button")){
            if (!((event.target.value=='=')||(event.target.value=='Ans')||(event.target.value=='AC')||(event.target.value=='DEL'))){
                document.calculator.ans.value+=event.target.value  
            }     
        }
    })
}
showCharacterOnscreen()


//do operations
btnACOnclick()
calculateOperationOnclick()
btnDELOnclick()