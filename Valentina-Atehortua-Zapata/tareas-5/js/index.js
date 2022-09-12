function swapTiles(position1, position2) {
  var temp = document.getElementById(position1).className;
  document.getElementById(position1).className =
    document.getElementById(position2).className;
  document.getElementById(position2).className = temp;
}

function shuffle() {
  for (var row = 1; row <= 3; row++) {
    for (var column = 1; column <= 3; column++) {
      var row2 = Math.floor(Math.random() * 3 + 1);
      var column2 = Math.floor(Math.random() * 3 + 1);

      swapTiles("position" + row + column, "position" + row2 + column2);
    }
  }
}

function clickPosition(row, column) {
  var position = document.getElementById("position" + row + column);
  var tile = position.className;
  if (tile != "img9") {
    if (column < 3) {
      if (
        document.getElementById("position" + row + (column + 1)).className ==
        "img9"
      ) {
        swapTiles("position" + row + column, "position" + row + (column + 1));
        return;
      }
    }

    if (column > 1) {
      if (
        document.getElementById("position" + row + (column - 1)).className ==
        "img9"
      ) {
        swapTiles("position" + row + column, "position" + row + (column - 1));
        return;
      }
    }

    if (row > 1) {
      if (
        document.getElementById("position" + (row - 1) + column).className ==
        "img9"
      ) {
        swapTiles("position" + row + column, "position" + (row - 1) + column);
        return;
      }
    }

    if (row < 3) {
      if (
        document.getElementById("position" + (row + 1) + column).className ==
        "img9"
      ) {
        swapTiles("position" + row + column, "position" + (row + 1) + column);
        return;
      }
    }
  }
}
