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
    
    cellArray = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10, tile11, tile12, tile13, tile14, tile15, tile16];
    console.log(cellArray);
    set = false;

    for (var i = 0; i < cellArray.length; i++) {
        cellArray[i].cellPos = i + 1;
        cellArray[i].display = i + 1;

        console.log(cellArray[i].display);
    }
}

function select(setCell) {
    
}

//https://github.com/Neill10/SliderPuzzle