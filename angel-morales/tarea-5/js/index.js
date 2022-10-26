"use strict";
const pieces = document.querySelectorAll(".piece");
const valuePieces = ["1", "2", "3", "4", "5", "6", "7", "8", ""];
let ramdomPieces = [];

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
  write();
};

pieces.forEach((piece) => {
  piece.addEventListener("click", (e) => {
    if (
      piece.id !== "2" &&
      piece.id !== "5" &&
      piece.textContent !== "" &&
      ramdomPieces[Number(e.target.id) + 1] === ""
    ) {
      swap(
        piece.textContent,
        ramdomPieces[Number(e.target.id) + 1],
        ramdomPieces
      );
    } else if (
      piece.id !== "3" &&
      piece.id !== "6" &&
      piece.textContent !== "" &&
      ramdomPieces[Number(e.target.id) - 1] === ""
    ) {
      swap(
        piece.textContent,
        ramdomPieces[Number(e.target.id) - 1],
        ramdomPieces
      );
    } else if (
      piece.textContent !== "" &&
      ramdomPieces[Number(e.target.id) + 3] === ""
    ) {
      swap(
        piece.textContent,
        ramdomPieces[Number(e.target.id) + 3],
        ramdomPieces
      );
    } else if (
      piece.textContent !== "" &&
      ramdomPieces[Number(e.target.id) - 3] === ""
    ) {
      swap(
        piece.textContent,
        ramdomPieces[Number(e.target.id) - 3],
        ramdomPieces
      );
    }
  });
});

changePieces(valuePieces);
write();
