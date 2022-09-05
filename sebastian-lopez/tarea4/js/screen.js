import * as operate from './operations.js'

let input = document.querySelector("input");
let result = document.querySelector("input[type='number']")

export function type(char,isOperator){

    if(isOperator){
        if(input.value.length > 0){

            if(char == "-"){
                input.value[input.value.length -1].match( "[-+]" )? input.value = input.value.slice(0,-1) + char: input.value += char
            }else if (char != "."){
                input.value[input.value.length -1].match( "[-+x/]" ) ? input.value = input.value.slice(0,-1) + char: input.value += char
            }else{
                let currentValue  = []
        
                let values = []
                let operators = []
        
                getValuesAndOperators(currentValue,values,operators)
                
                values[values.length -1].includes(".") && values.length != operators.length ? input.values = input.value : input.value += char
            }
            
        }else{
            char.match(/[-+.]/) ? input.value += char : input.value = input.value
        }
    }else{
        
        input.value += char

        let currentValue  = []
        
        let values = []
        let operators = []

       getValuesAndOperators(currentValue,values,operators)

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

        let currentValue  = []
        let values = []
        let operators = []

       getValuesAndOperators(currentValue,values,operators)

        if(values.length > 1){ 
                result.value = initializeOperation(operators,values)        
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


function getValuesAndOperators(currentValue,values,operators){

    Array.from(input.value).forEach((c,i) =>{
        
       if((c == "-" || c == "x" || c == "/" || c == "+") && (i != 0)  && (input.value[i-1] != "-" && input.value[i-1] != "/" && input.value[i-1] != "+" && input.value[i-1] != "x" )){
            operators.push(c)
            values.push(currentValue.join(""))
            currentValue = []
        }else{   
            currentValue.push(c)
            if(i  == input.value.length -1){
                values.push(currentValue.join(""))
                currentValue = []
            } 
        }
    })
}
