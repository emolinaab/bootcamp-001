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

