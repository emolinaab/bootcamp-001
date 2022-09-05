import { makeButton, makeSection, makeIcon, makeDiv } from "./components/makeElements.js";
import { Calculator } from "./components/calculator.js";

const sections = ["resultSection", "buttonSection"];

const divs = ["previousValue", "currentValue"];

const buttons = [
    {text: "+", cls: "operator"},
    {text: "-", cls: "operator"},
    {text: "×", cls: "operator"},
    {text: "÷", cls: "operator"},
    {text: "7", cls: "num"},
    {text: "8", cls: "num"},
    {text: "9", cls: "num"},
    {text: "AC", cls: "allClear"},
    {text: "4", cls: "num"},
    {text: "5", cls: "num"},
    {text: "6", cls: "num"},
    {text: "C", cls: "clear"},
    {text: "1", cls: "num"},
    {text: "2", cls: "num"},
    {text: "3", cls: "num"},
    {text: "%", cls: "operator"},
    {text: "0", cls: "zero"},
    {text: ".", cls: "num"},
    {text: "=", cls: "equals"},
];


sections.map((s) => {
    makeSection(s)
});

divs.map((s) => {
    makeDiv(s);
});

buttons.map((b) => {
    makeButton(b);
});


const numberButtons = document.querySelectorAll('.num,.zero');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.clear');
const allClearButton = document.querySelector('.allClear');
const currentValue = document.getElementById("currentValue");
const previousValue = document.getElementById("previousValue");
const calculator = new Calculator(currentValue,previousValue);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.display();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
      calculator.display();
    })
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.display();
});

allClearButton.addEventListener('click', button => {
    calculator.clearAll();
    calculator.display();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.display();
 }); 
    
    