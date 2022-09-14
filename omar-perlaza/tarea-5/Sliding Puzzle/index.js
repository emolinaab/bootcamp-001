
let rows = 4;
let columns = 4;
let onTiles;
let blankTile;
let turns = 0;
let score = "";

let order =["3","2","1","4","5","6","7","8","9","10","11","12","16","14","15","13"];

window.onload = function(){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
           
            let tiles = document.createElement("img");
            tiles.id = i.toString() + "-" + j.toString();
            tiles.src = order.shift() + ".jpg";

            tiles.addEventListener("dragstart", dragStart);  //click an image to drag
            tiles.addEventListener("dragover", dragOver);    //moving image around while clicked
            tiles.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tiles.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tiles.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tiles.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tiles);

        }
        
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}

function dragEnd() {
    if (!otherTile.src.includes("13.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let i = parseInt(currCoords[0]);
    let j = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let i2 = parseInt(otherCoords[0]);
    let j2 = parseInt(otherCoords[1]);

    let moveLeft = i == i2 && j2 == j-1;
    let moveRight = i == i2 && j2 == j+1;

    let moveUp = j == j2 && i2 == i-1;
    let moveDown = j == j2 && i2 == i+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        if (turns <= 29) {
            document.getElementById("score").innerText = "Excellent";

        }

        else if ((turns >= 30) && turns < 40) {
            document.getElementById("score").innerText = "Regular"
        }

         
        else{
            document.getElementById("score").innerText = "! I'm sorry ¡"
        }

        turns += 1;
        document.getElementById("turns").innerText = turns;

    }


}