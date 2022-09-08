let space_rect = [15] ; 
let button_rect = [15] ; 
let space = ["aa","ab","ac","ad","ba","bb","bc","bd","ca","cb","cc","cd","da","db","dc","dd"] ; 
let buttons = ["aa_","ab_","ac_","ad_","ba_","bb_","bc_","bd_","ca_","cb_","cc_","cd_","da_","db_","dc_"] ; 
let condition = 0; 
const min = 1;
const max = 4;
let c ; 
let r ; 
let empty ; 
let empty_temp ; 
let i,j,k;
let num_but = document.querySelectorAll("button");
let possible = [4] ; 


function possible_buttons (array){
const vect = ["a","b","c","d"];
let array_result = [4] ; 

array_result[0] = vect [vect.indexOf((array[0])) -1]+vect [vect.indexOf((array[1]))];
array_result[1] = vect [vect.indexOf((array[0]))] + vect [vect.indexOf((array[1]))-1] ; 
array_result[2] = vect [vect.indexOf((array[0])) +1] + vect [vect.indexOf((array[1])) ]; 
array_result[3] = vect [vect.indexOf((array[0])) ]+vect [vect.indexOf((array[1]))+1];

return array_result; 
}

window.addEventListener('load', function() {
  
alert("welcome to the fifteen puzzle, please  organize the numbers to win")  ;
for (i = space.length; i; i--) {
  j = Math.floor(Math.random() * i);
  k = space[i - 1];
  space[i - 1] = space[j]; 
  space[j] = k;
}

for (let x=0; x < 15; x++) {
  document.getElementById(space[x]).insertAdjacentElement('afterbegin',document.getElementById(buttons[x])) ; 
  empty = space [x+1] ;
}


});

 
for (let x = 0; x < num_but.length; x++) {
  num_but[x].addEventListener("click", function (event) {
    possible =  possible_buttons (empty) ; 
    if (num_but[x].parentNode.id == possible[0] || num_but[x].parentNode.id == possible[1] || num_but[x].parentNode.id == possible[2] || num_but[x].parentNode.id == possible[3]) {
      empty_temp = num_but[x].parentNode.id ; 
      document.getElementById(empty).insertAdjacentElement('afterbegin',num_but[x]) ; 
      empty = empty_temp ;
    }
    else {alert ("you can't move that button" ) ; }
      for (let y=0; y < num_but.length; y++) {
        space_rect[y] =  num_but[y].parentNode.id ;
        button_rect[y] =   num_but[y].id.substr(0, num_but[y].id.length - 1) ; 
      }

      if (JSON.stringify(space_rect)==JSON.stringify(button_rect) ) {
        alert("You won the game,please restart the webside to play again ")
      }

  });

}


