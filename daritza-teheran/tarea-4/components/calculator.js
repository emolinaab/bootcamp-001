export class Calculator{
    constructor(cV,pV) {
      this.currentValueElement = cV;
      this.previousValueElement = pV;
      this.clearAll()
    };
    
    appendNumber(number) {
      if (number === '.' && this.currentValue.includes('.')) return{};
      this.currentValue = this.currentValue.toString() + number.toString();
    };

    chooseOperation(operation) {
      if (operation == '%') {
        if(this.lastOp==null){
          this.operation="%";
          this.previousValue = 100;
          this.compute();
          if (this.previousValue !== '') {
            this.compute();
          }
          console.log(this.currentValue, this.previousValue);
        }
        else{
          this.compute();
          this.operation="%";
          this.previousValue = 100;
          this.compute();
        };
      }
      else{
        if (this.currentValue === '') return{};
        if (this.previousValue !== '') {
          this.compute();
        }
        this.lastOp=operation;
        this.operation = operation;
        this.previousValue = this.currentValue;
        this.currentValue = '';
      }       
    };

    clearAll() {
      this.currentValue = '';
      this.previousValue = '';
      this.operation = undefined;
      this.lastOp = undefined;
    };

    delete() {
      this.currentValue = this.currentValue.toString().slice(0, -1);
    };

    

    compute() {
      let result
      const previous = parseFloat(this.previousValue);
      const current = parseFloat(this.currentValue);
      if (isNaN(previous) || isNaN(current)) return{};
      switch (this.operation) {
        case '+':
          result = previous + current;
          break
        case '-':
          result = previous - current;
          break
        case '×':
          result = previous * current;
          break
        case '÷':
          result = previous / current;
          break
        case '%':
          result = current/previous;
          break
        default:
          return
      }
      this.currentValue = result;
      this.operation = undefined;
      this.previousValue = '';
    };

    getDisplay(number) {
      const stringNum = number.toString();
      const integer = parseFloat(stringNum.split('.')[0]);
      const decimal = stringNum.split('.')[1];
      let numberDisplay;
      if (isNaN(integer)) {
        numberDisplay = '';
      } else {
        numberDisplay = integer.toLocaleString('en', { maximumFractionDigits: 0 });
      }
      if (decimal != null) {
        return `${numberDisplay}.${decimal}`;
      } else {
        return numberDisplay;
      }
    };

    display(){
      this.currentValueElement.innerText =
      this.getDisplay(this.currentValue);
      if (this.operation != null) {
        this.previousValueElement.innerText =
          `${this.getDisplay(this.previousValue)} ${this.operation} ${this.currentValue}`;
      } else {
        this.previousValueElement.innerText = '';
      }
    };
}