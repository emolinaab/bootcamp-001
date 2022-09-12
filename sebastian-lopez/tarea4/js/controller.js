import * as screen from './screen.js';

let numbers  = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")
let deleteButtons = document.querySelectorAll(".green")
let submit = document.querySelector("#answer")

operators.forEach(op =>{
    op.addEventListener("click", e=>{
        screen.type(op.textContent,true)
    })
})

numbers.forEach(num =>{
    num.addEventListener("click" , e =>{
        num.textContent == "." ? screen.type(num.textContent,true): screen.type(num.textContent)    
    })
})

deleteButtons.forEach(db =>{
    db.addEventListener("click", e =>{
        screen.clear(db.textContent) 
    })
})

submit.addEventListener("click", e => screen.submit())