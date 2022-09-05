
export let calculateOperationOnclick=()=>{
    calculator.addEventListener("click",function(event){  
        if (event.target.value=='='){
            document.calculator.ans.value=eval(document.calculator.ans.value)
        }
    })
}

export let btnACOnclick=()=>{
    calculator.addEventListener("click",function(event){  
        if (event.target.value=='AC'){
            document.calculator.ans.value=""
        }
    })
}

export let btnDELOnclick =()=>{
    calculator.addEventListener("click",function(event){  
        let valor=document.calculator.ans.value
        if (event.target.value=='DEL'){
            document.calculator.ans.value=valor.slice(0, valor.length-1)
        }
    })
}

function name() {
    calculator.addEventListener("click",function(event){
    if(document.calculator.ans.value=="Sin("){
        console.log(event.target)
    } 

    })}


name()