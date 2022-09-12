const blocks = ["1", "2", "3", "4", "", "5", "6", "7", "8"];

const init = () => {
  write();
  suffle();
};

const write = () => {
  blocks.forEach((item, index) => {
    document.getElementById(index).innerHTML = item;
    let element1 = document.getElementById(index);
    element1.classList.remove("emptyblock");
    if (item == "") {
      let element = document.getElementById(index);
      element.classList.add("emptyblock");
    }
  });
};

const suffle = () => {
  for (let i = 0; i < 100; i++) {
    let block = Math.floor(Math.random() * (8 + 1));
    moveBlock(block);
  }
};

const moveBlock = (block) => {
  if (block == 0) {
    blocks[1] == 0 ? swap(0, 1) : null;
    blocks[3] == 0 ? swap(0, 3) : null;
  }

  if (block == 1) {
    blocks[0] == 0 ? swap(1, 0) : null;
    blocks[4] == 0 ? swap(1, 4) : null;
    blocks[2] == 0 ? swap(1, 2) : null;
  }

  if (block == 2) {
    blocks[1] == 0 ? swap(2, 1) : null;
    blocks[5] == 0 ? swap(2, 5) : null;
  }

  if (block == 3) {
    blocks[0] == 0 ? swap(3, 0) : null;
    blocks[4] == 0 ? swap(3, 4) : null;
    blocks[6] == 0 ? swap(3, 6) : null;
  }

  if (block == 4) {
    blocks[1] == 0 ? swap(4, 1) : null;
    blocks[3] == 0 ? swap(4, 3) : null;
    blocks[5] == 0 ? swap(4, 5) : null;
    blocks[7] == 0 ? swap(4, 7) : null;
  }

  if (block == 5) {
    blocks[2] == 0 ? swap(5, 2) : null;
    blocks[4] == 0 ? swap(5, 4) : null;
    blocks[8] == 0 ? swap(5, 8) : null;
  }

  if (block == 6) {
    blocks[3] == 0 ? swap(6, 3) : null;
    blocks[7] == 0 ? swap(6, 7) : null;
  }

  if (block == 7) {
    blocks[6] == 0 ? swap(7, 6) : null;
    blocks[4] == 0 ? swap(7, 4) : null;
    blocks[8] == 0 ? swap(7, 8) : null;
  }

  if (block == 8) {
    blocks[5] == 0 ? swap(8, 5) : null;
    blocks[7] == 0 ? swap(8, 7) : null;
  }
};

const swap = (s1, s2) => {
  let temp = blocks[s1];
  blocks[s1] = blocks[s2];
  blocks[s2] = temp;
  write();
};

init();

document.addEventListener("click", (e) => {moveBlock(e.target.id)}, false);
