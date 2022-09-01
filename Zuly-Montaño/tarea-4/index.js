class Display {
    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculating = new Calculator();
        this.operationType = undefined;
        this.CurrentValue = '';
        this.PreviousValue = '';
        this.signs = {
            addition: '+',
            divide: '/',
            multiply: '*',
            subtraction: '-', 
            porcentage: '%', 
        }
    }

    delete() {
        this.CurrentValue = this.CurrentValue.toString().slice(0,-1);
        this.PrintValues();
    }

    deleteAll() {
        this.CurrentValue = '';
        this.PreviousValue = '';
        this.operationType = undefined;
        this.PrintValues();
    }

    compute(type) {
        this.operationType !== ' equal ' && this.calculate();
        this.operationType = type;
        this.PreviousValue = this.CurrentValue || this.PreviousValue;
        this.CurrentValue = '';
        this.PrintValues();
    }

    addnumber(number) {
        if(number === '.' && this.CurrentValue.includes('.')) return
        this.CurrentValue = this.CurrentValue.toString() + number.toString();
        this.PrintValues();
    }

    PrintValues() {
        this.displayCurrentValue.textContent = this.CurrentValue;
        this.displayPreviousValue.textContent = `${this.PreviousValue} ${this.signs[this.operationType] || ''}`;
    }

    calculate() {
        const PreviousValue = parseFloat(this.PreviousValue);
        const CurrentValue = parseFloat(this.CurrentValue);

        if( isNaN(CurrentValue)  || isNaN(PreviousValue) ) return
        this.CurrentValue = this.calculating[this.operationType](PreviousValue, CurrentValue);
    }
}

class Calculator {
    addition(num1, num2) {
        return num1 + num2;
    }

    subtraction(num1, num2) {
        return num1 - num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }
    
    porcentage(num1, num2) {
        return num1 * num2/100;
    }
} 

const displayPreviousValue = document.getElementById('Previous-Value');
const displayCurrentValue = document.getElementById('Current-Value');
const buttonNumber = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayCurrentValue);

buttonNumber.forEach(button => {
    button.addEventListener('click', () => display.addnumber(button.innerHTML));
});

buttonOperator.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});