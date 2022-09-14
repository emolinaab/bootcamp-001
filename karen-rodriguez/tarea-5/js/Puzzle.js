let classes=['box0','box1','box2','box3','box4','box5','box6','box7','box8']
let class1,id1,num_click=0

export function moveBox(event){
        num_click=num_click+1
        let id=event.target.id
        if (num_click==1){
            id1=id
            class1=document.getElementById(id).className
        }
        if(num_click==2){
           if(event.target.className=='box8'){
            document.getElementById(id1).className=document.getElementById(id).className
            document.getElementById(id).className=class1
           }
           num_click=0
        }
}

export function shuffle (sort){
    if (sort==true){
        classes.sort(function(){return Math.random()-0.5})
    }
    for(let i=0; i<classes.length; i++){
            document.getElementById('box'+i).className=classes[i]
        }
    classes.sort()
}

export function check(){
    let right=true
    for(let i=0; i<8;i++){
        if(document.getElementById("box"+i).id!= document.getElementById("box"+i).className){
            right=false
            alert("oops! You still have a little to finish")
        }
    }
    if (right==true){
        alert("Congratulations! you have finished")
    }
}

