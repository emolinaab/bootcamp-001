var space_rectification = [15];
var button_rectification = [15];
var space = ["aa", "ab", "ac", "ad", "ba", "bb", "bc", "bd", "ca", "cb", "cc", "cd", "da", "db", "dc", "dd"];
var buttons = ["aa_", "ab_", "ac_", "ad_", "ba_", "bb_", "bc_", "bd_", "ca_", "cb_", "cc_", "cd_", "da_", "db_", "dc_"];
var empty_space;
var empty_spacetemp;
const num_but = document.querySelectorAll("button");

function possible_buttons_to_move(array) {
  const vect = ["a", "b", "c", "d"];
  let array_result = [4];
  array_result[0] = vect[vect.indexOf((array[0])) - 1] + vect[vect.indexOf((array[1]))];
  array_result[1] = vect[vect.indexOf((array[0]))] + vect[vect.indexOf((array[1])) - 1];
  array_result[2] = vect[vect.indexOf((array[0])) + 1] + vect[vect.indexOf((array[1]))];
  array_result[3] = vect[vect.indexOf((array[0]))] + vect[vect.indexOf((array[1])) + 1];
  return array_result;
}

window.addEventListener('load', function () {

  alert("welcome to the fifteen puzzle, please  organize the numbers to win");

  for (let i = space.length; i; i--) {
    let random_integer = Math.floor(Math.random() * i);
    let previus_num = space[i - 1];
    space[i - 1] = space[random_integer];
    space[random_integer] = previus_num;
  }
  //insert the buttons in a random space 
  for (let x = 0; x < 15; x++) {
    document.getElementById(space[x]).insertAdjacentElement('afterbegin', document.getElementById(buttons[x]));
    empty_space = space[x + 1];
  }


  for (let x = 0; x < num_but.length; x++) {
    num_but[x].addEventListener("click", () => {
      let possible = [4];
      possible = possible_buttons_to_move(empty_space);
      if (num_but[x].parentNode.id == possible[0] || num_but[x].parentNode.id == possible[1] || num_but[x].parentNode.id == possible[2] || num_but[x].parentNode.id == possible[3]) {
        empty_spacetemp = num_but[x].parentNode.id;
        document.getElementById(empty_space).insertAdjacentElement('afterbegin', num_but[x]);
        empty_space = empty_spacetemp;
      }
      else { alert("you can't move that button"); }

      for (let y = 0; y < num_but.length; y++) {
        space_rectification[y] = num_but[y].parentNode.id;
        button_rectification[y] = num_but[y].id.substr(0, num_but[y].id.length - 1);
      }

      if (JSON.stringify(space_rectification) == JSON.stringify(button_rectification)) {
        alert("You won the game,please restart the webside to play again ")
      }
    });
  }
});




