function initialize() {
    tile1 = document.getElementById("cell1");
    tile2 = document.getElementById("cell2");
    tile3 = document.getElementById("cell3");
    tile4 = document.getElementById("cell4");

    tile5 = document.getElementById("cell5");
    tile6 = document.getElementById("cell6");
    tile7 = document.getElementById("cell7");
    tile8 = document.getElementById("cell8");

    tile9 = document.getElementById("cell9");
    tile10 = document.getElementById("cell10");
    tile11 = document.getElementById("cell11");
    tile12 = document.getElementById("cell12");

    tile13 = document.getElementById("cell13");
    tile14 = document.getElementById("cell14");
    tile15 = document.getElementById("cell15");
    tile16 = document.getElementById("cell16");

    winDisplay = document.getElementById("winDisplay");
    movesDisplay = document.getElementById("movesDisplay");
    
    cellArray = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10, tile11, tile12, tile13, tile14, tile15, tile16];
    console.log(cellArray);
    setCell = "";
    set = false;
    numMoves = 0;
    emptyCell = tile16;

    for (var i = 0; i < cellArray.length; i++) {
        cellArray[i].cellPos = i + 1;
        cellArray[i].display = i + 1;

        console.log(cellArray[i].display);
    }
}

function select(cell) {
    if(set) {
        if (setCell.display == 16 || cell.display == 16) {
            if (validMove(cell)) {
                slide(setCell, cell);
                if (setCell.display == 16) {
                    setCell.innerHTML = "";
                }
                else {
                    cell.innerHTML = "";
                }
                numMoves++;
                movesDisplay.innerHTML = numMoves;
                window();
            }
            else {
                console.log("Invalid");
            }
        }
        else {
            console.log("Empty cell is not selected");
        }
        set = false;
    }
    else {
        setCell = cell;
        set = true;
    }
}

function validMove(toCell) {
    var validMoves = checkValid(setCell);
    var toPos = toCell.cellPos;
    for (move of validMoves) {
        if (toPos == move) {
            return true;
        }
    }
    return false;
}

function checkValid(cell) {
    var valid = [];
    var fromPos =  cell.cellPos;
    var up = -1;
    var down = -1;
    var left = -1;
    var right = -1;

    if (!(fromPos <= 4)){
        up = fromPos - 4;
        valid.push(up);
    }
    if(!(fromPos >= 13)){ 
        down = fromPos + 4;
        valid.push(down);
        console.log(down);
    }
    if(!(fromPos == 1 || fromPos == 5 || fromPos == 9 || fromPos == 13)){ 
        left = fromPos - 1;
        valid.push(left);
    }
    if(!(fromPos == 4 || fromPos == 8 || fromPos == 12 || fromPos == 16)){ 
        right = fromPos + 1;
        valid.push(right);
    }
    console.log(valid);
    return valid;
}

function slide(from, to){
    var tempDisplay = to.display;
    to.display = from.display;
    from.display = tempDisplay;

    console.log("From pos " + from.cellPos);
    console.log("To pos " + to.cellPos);
    to.innerHTML = to.display;
    from.innerHTML = from.display;
}

function win(){
    var win = true;
    for(var i = 0; i < cellArray.length;i++){
        if(cellArray[i].display != i + 1){
            win = false;
            winDisplay.innerHTML = ""
        }
    }
    if(win){
        winDisplay.innerHTML = "You completed the slide puzzle!";
    }
}

//https://github.com/Neill10/SliderPuzzle