let screen = document.querySelector('#screen')
let btn = document.querySelectorAll('.btn')

for(item of btn){
    
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;

        if(btntext=='X'){
          btntext = '*' 
        }
        
        if(btntext=='%'){
            btntext = '/' 
          }
        screen.value+=btntext;
    })
}

function arrow(){
    screen.value=screen.value.substr(0,screen.value.length-1)
}

function equal(){
    screen.value=eval(screen.value)
}

function empty(){
    screen.value=''
}