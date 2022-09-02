import * as operate from './operations.js'

let input = document.querySelector("input");
let result = document.querySelector("input[type='number']")

export function type(char,isOperator){

    if(isOperator){
        if(input.value.length > 0){
            input.value[input.value.length -1].match( "[-+x/.]" )? input.value == input.value : input.value += char
        }else{
            input.value = input.value
        }
    }else{ 
        input.value += char
        let values = input.value.split(/[-+x/]/)

        let operators = input.value.split(/[0123456789.]/).join("")

        if(values.length > 1){
           result.value = initializeOperation(operators,values)
        }
    }
}

export function clear(chars){
    if(chars == "AC") {
        input.value = ""
        result.value = ""
    }else{
        input.value = input.value.slice(0,-1)
        let values = input.value.split(/[-+x/]/)
        let operators = input.value.split(/[0123456789.]/).join("")


        if(values.length > 1){
            if(!Array.from(input.value)[input.value.length -1].match(/[+-/x]/)) {
                result.value = initializeOperation(operators,values)
            }else{
                values.length > 2?result.value = initializeOperation(operators.slice(0,-1),values.slice(0,-1)): result.value = ""
            }    
        }else{
             result.value = ""
        }
       
    } 
    
}

export function submit(){
    let values = input.value.split(/[-+x/]/)
    if(values.length>1){
        input.value = result.value
        result.value = ""
    }
}
function initializeOperation(operators,values){
    let response = 0

    let ops = Array.from(operators)

    values.forEach((value,index) => {
        if(index > 0){
            switch(ops[index-1]){
                case "x":index > 1? response = operate.multiply(response,parseFloat(value)):response += operate.multiply(parseFloat(values[index-1]),parseFloat(value));
                    break;
                case "-":index > 1? response = operate.subtract(response,parseFloat(value)): response += operate.subtract(parseFloat(values[index-1]),parseFloat(value));
                    break;
                case "+":index > 1? response = operate.add(response,parseFloat(value)): response += operate.add(parseFloat(values[index-1]),parseFloat(value));
                    break;
                case "/":index > 1? response = operate.divide(response,parseFloat(value)): response += operate.divide(parseFloat(values[index-1]),parseFloat(value));
                    break;
            }
        }
        
    });
    return response
}

