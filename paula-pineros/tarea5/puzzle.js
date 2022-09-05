function create(){
    let orderedArray =[];
    while (orderedArray.length < 15){
        temp = Math.floor(Math.random() * 15) + 1;
        if (orderedArray.includes(temp) == false){
            orderedArray.push(temp);
        }
    }
    cell(orderedArray);
    document.getElementById('16').textContent = "";
    document.getElementById('16').style.background = "rgb(177, 249, 225)";
}
function cell(orderedArray){
    for(let i = 0; i < 15; i++){
        value = orderedArray[i];
        document.getElementById(i+1).textContent = value;
        isOdd(i+1);
    }
}
function move(edge, position){
    let final;
    if(edge[0] == 'L'){
        if(document.getElementById(position+1).textContent == ""){
            final = position + 1;
            change(position, final);
        }
    }else if(edge[0] == 'R'){
        if(document.getElementById(position-1).textContent == ""){
            final = position -1;
            change(position, final); 
        }
    }else if(edge[0] == 'M'){
        if(document.getElementById(position+1).textContent == ""){
            final = position + 1;
            change(position, final);
        }else if(document.getElementById(position-1).textContent == ""){
            final = position - 1;
            change(position, final);
        }
    }
    if(edge[1] == 'U'){
        if(document.getElementById(position+4).textContent == ""){
            final = position + 4;
            change(position, final);
        }
    }else if(edge[1] == 'D'){
        if(document.getElementById(position-4).textContent == ""){
            final = position - 4;
            change(position, final);
        }
    }else if(edge[1] == 'M'){
        if(document.getElementById(position+4).textContent == ""){
            final = position + 4;
            change(position, final);
        }else if(document.getElementById(position-4).textContent == ""){
            final = position - 4;
            change(position, final);
        }
    }
    isOdd(final);
    document.getElementById(position).style.backgroundColor = "rgb(177, 249, 225)";
}
function change(init, final){
    document.getElementById(final).textContent = document.getElementById(init).textContent;
    document.getElementById(init).textContent = "";
}
function isOdd(number){
    if(document.getElementById(number).textContent % 2 == 0){
        document.getElementById(number).style.backgroundColor = "rgb(241, 148, 138)";
    }else{
        document.getElementById(number).style.backgroundColor = "white";
    }
}
function end(){
    let win = true;
    for(let i = 1; i <= 15; i++){
        if(document.getElementById(number).textContent != i){
            win = false;
        }
    }
    if(win == true){
        alert("Congratulations! You won");
    }
}

