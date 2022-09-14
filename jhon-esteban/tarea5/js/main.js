var turns = 0

function swapImages(position1, position2) {

    let position = document.getElementById(position1).className

    document.getElementById(position1).className = (document.getElementById(position2).className)
    document.getElementById(position2).className = position
  }
  
  function shuffleImages() {
    
    for (let row = 1; row <= 3; row++) {
      for (let column = 1; column <= 3; column++) {
        
        let row2 = Math.floor(Math.random() * 3 + 1)
        let column2 = Math.floor(Math.random() * 3 + 1)
  
        swapImages("position" + row + column, "position" + row2 + column2);
      }
    }
  }
  
  function changePosition(row, column) {

    let position = document.getElementById("position" + row + column);
    let piece = position.className;

        if (piece != "img9") {
            if (column < 3) {
                if (document.getElementById("position" + row + (column + 1)).className =="img9"){

                    swapImages("position" + row + column, "position" + row + (column + 1));
                    return;
                }
            }
    
            if (column > 1) {
                if (document.getElementById("position" + row + (column - 1)).className =="img9"){

                    swapImages("position" + row + column, "position" + row + (column - 1));
                    return;
                }
            }
    
            if (row > 1) {
                if (document.getElementById("position" + (row - 1) + column).className =="img9"){

                    swapImages("position" + row + column, "position" + (row - 1) + column);
                    return;
                }
            }
    
            if (row < 3) {
                if (document.getElementById("position" + (row + 1) + column).className =="img9"){

                    swapImages("position" + row + column, "position" + (row + 1) + column);
                    return;
                    
                }
            } 
        }
  }
  