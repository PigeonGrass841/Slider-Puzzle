function initialize() {
    display("tile1", 1);
    display("tile2", 2);
    display("tile3", 3);
    display("tile4", 4);
    
    display("tile5", 5);
    display("tile6", 6);
    display("tile7", 7);
    display("tile8", 8);

    display("tile9", 9);
    display("tile10", 10);
    display("tile11", 11);
    display("tile12", 12);

    display("tile13", 13);
    display("tile14", 14);
    display("tile15", 15);
    display("tile16", null);

    set = null;
}

function display(id, number) {
    var placeholder = document.getElementById(id);
    placeholder.innerHTML = number;
}

function swap(fromTile, toTile) {
    var tempTile = document.getElementById(fromTile).innerHTML;
    document.getElementById(fromTile).innerHTML = document.getElementById(toTile).innerHTML;
    document.getElementById(toTile).innerHTML = tempTile;
}

function select(setTile) {
    console.log(setTile);
    var tile = document.getElementById(setTile).innerHTML;

    if (set) {
        if (set != tile) {
            swap (set, tile);
            set = null;
        }
        else {
            set = null;
        }
    }
    else {
        set = tile;
    }
}