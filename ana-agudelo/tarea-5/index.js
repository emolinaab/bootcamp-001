class Puzzle {
    cols = 4;
    rows = 4;
    blocks;
    count;
    emptyBlockCoords = [3, 3];
    indexes = [];
  
    constructor() {
      this.count = this.cols * this.rows;
      this.blocks = document.getElementsByClassName('puzzle');
      this.init();
    }

    init() {
      for (let i = 0; i<=this.rows-1; i++) {
        for (let j = 0; j<=this.cols-1; j++) {
          let blockId = j + i * this.cols;
          if (blockId + 1 >= this.count) break;
          let block = this.blocks[blockId];
          this.positionBlock(blockId, j, i);
          block.addEventListener('click', (e) => this.moveBlock(blockId));
          this.indexes.push(blockId);
        }
      }
      this.indexes.push(this.count - 1);
      this.random(this);
    }

    random() {
      let randomBlockId = Math.floor(Math.random() * (this.count - 1));
      this.moveBlock(randomBlockId);
    }

    moveBlock(blockId) {
      let block = this.blocks[blockId];
      let blockCoords = this.canMove(block);
      if (blockCoords != null) {
        this.positionBlock(blockId,this.emptyBlockCoords[0],this.emptyBlockCoords[1]);
        this.indexes[this.emptyBlockCoords[0] + this.emptyBlockCoords[1] * this.cols] = this.indexes[blockCoords[0] + blockCoords[1] * this.cols];
        this.emptyBlockCoords[0] = blockCoords[0];
        this.emptyBlockCoords[1] = blockCoords[1];
        return true;
      }else{}
      return false;
    }

    canMove(block) {
      let blockPos = [parseInt(block.style.left), parseInt(block.style.top)];
      let blockWidth = block.clientWidth;
      let blockCoords = [blockPos[0] / blockWidth, blockPos[1] / blockWidth];
      let diff = [Math.abs(blockCoords[0] - this.emptyBlockCoords[0]), Math.abs(blockCoords[1] - this.emptyBlockCoords[1])];
      let canMove = (diff[0] == 1 && diff[1] == 0) || (diff[0] == 0 && diff[1] == 1);
      if (canMove){
        return blockCoords;
      } 
      else{
        return null;
      }
    }
  
    positionBlock(blockId, j, i) {
      let block = this.blocks[blockId];
      block.style.left = (j * block.clientWidth) + 'px';
      block.style.top = (i * block.clientWidth) + 'px';
    }
  }

  var puzzle = new Puzzle();