function init(){
    const result = document.getElementById("result");
    const reset = document.getElementById("reset");
    const sum = document.getElementById("sum");
    const substraction = document.getElementById("substraction");
    const multiplication = document.getElementById("multiplication");
    const division = document.getElementById("division");
    const equal = document.getElementById("equal");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    const zero = document.getElementById("zero");

    let firstnumber;
    let secondnumber;
    let operation;

    one.addEventListener("click", (e)=>{
        result.textContent = result.textContent + "1";
    });
    two.addEventListener("click", (e)=>{
        result.textContent = result.textContent + "2";
    });
    three.addEventListener("click", (e)=>{
        result.textContent = result.textContent + "3";
    });
    four.addEventListener("click", (e)=>{
        result.textContent = result.textContent + "4";
    });
    five.addEventListener("click", (e)=>{
        result.textContent = result.textContent + "5";
    });
    six.addEventListener("click", (e)=>{
        result.textContent = result.textContent + "6";
    });
    seven.addEventListener("click", (e)=>{
        result.textContent = result.textContent + "7";
    });
    eight.addEventListener("click", (e)=>{
        result.textContent = result.textContent + "8";
    });
    nine.addEventListener("click", (e)=>{
        result.textContent = result.textContent + "9";
    });
    zero.addEventListener("click", (e)=>{
        result.textContent = result.textContent + "0";
    });
    reset.addEventListener("click", (e)=>{
        restart();
    });
    
    sum.addEventListener("click", (e)=>{
        firstnumber=parseFloat(result.textContent);
        operation = "+";
        clean();
    });

    substraction.addEventListener("click", (e)=>{
        firstnumber=parseFloat(result.textContent);
        operation = "-";
        clean();
    });

    multiplication.addEventListener("click", (e)=>{
        firstnumber=parseFloat(result.textContent);
        operation = "*";
        clean();
    });

    division.addEventListener("click", (e)=>{
        firstnumber=parseFloat(result.textContent);
        operation = "/";
        clean();
    });
    
    equal.addEventListener("click", (e)=>{
        secondnumber = parseFloat(result.textContent);
        doing();
    });

    const clean = () => (result.textContent="");

    const restart = () =>{
        result.textContent="";
        firstnumber=0;
        secondnumber=0;
        operation=0;
    };

    const doing = () => {
        let op=0;
        switch(operation){
            case "+": 
                op = firstnumber + secondnumber;
                break;
            case "-": 
                op = firstnumber - secondnumber;
                break; 
            case "*": 
                op = firstnumber * secondnumber;
                break;
            case "/": 
                op = firstnumber / secondnumber;
                break;     
        }
        restart();
        result.textContent = op;
    };
}
