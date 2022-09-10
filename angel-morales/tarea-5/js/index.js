"use strict";
const pieces = document.querySelectorAll(".piece");
const valuePieces = ["1", "2", "3", "4", "5", "6", "7", "8", ""];
let ramdomPieces = [],
  positions = [],
  value = [];

function changePieces(arr) {
  ramdomPieces = arr.sort(() => Math.random() - 0.5);
}

const write = () => {
  ramdomPieces.forEach((item, index) => {
    document.getElementById(index).innerHTML = item;
  });

  document.getElementById(ramdomPieces.indexOf("")).classList.add("empty");
};

const swap = (val1, val2, arr) => {
  if (!arr.includes(val1) || !arr.includes(val2)) return;
  document.getElementById(ramdomPieces.indexOf(val1)).classList.toggle("empty");
  document.getElementById(ramdomPieces.indexOf(val2)).classList.toggle("empty");
  let val1_index = arr.indexOf(val1);
  let val2_index = arr.indexOf(val2);
  arr.splice(val1_index, 1, val2);
  arr.splice(val2_index, 1, val1);
};

const validatePosit = (arr) => {
  return (arr.includes("2") && arr.includes("3")) ||
    (arr.includes("5") && arr.includes("6"))
    ? true
    : false;
};

pieces.forEach((piece) => {
  piece.addEventListener("click", (e) => {
    positions.push(e.target.id);
    value.push(piece.textContent);

    if (value[0] !== value[1]) {
      let [pos1, pos2] = positions;
      if (positions.length === 2) {
        if (value.includes("") && value[0] !== value[1]) {
          if (
            ramdomPieces[Number(pos1) + 1] === value[1] &&
            ramdomPieces[Number(pos2) - 1] === value[0]
          ) {
            if (!validatePosit(positions)) swap(...value, ramdomPieces);
          } else if (
            ramdomPieces[Number(pos1) - 1] === value[1] &&
            ramdomPieces[Number(pos2) + 1] === value[0]
          ) {
            if (!validatePosit(positions)) swap(...value, ramdomPieces);
          } else if (
            ramdomPieces[Number(pos1) - 3] === value[1] &&
            ramdomPieces[Number(pos2) + 3] === value[0]
          ) {
            swap(...value, ramdomPieces);
          } else if (
            ramdomPieces[Number(pos1) + 3] === value[1] &&
            ramdomPieces[Number(pos2) - 3] === value[0]
          ) {
            swap(...value, ramdomPieces);
          }
          write();
        }
        value = [];
        positions = [];
      }
    } else {
      value = [];
      positions = [];
    }
  });
});

changePieces(valuePieces);
write();
