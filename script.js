function initialize() {
    space1 = 1;
    space2 = 2;
    space3 = 3;
    space4 = 4;

    space5 = 5;
    space6 = 6;
    space7 = 7;
    space8 = 8;

    space9 = 9;
    space10 = 10;
    space11 = 11;
    space12 = 12

    space13 = 13;
    space14 = 14;
    space15 = 15;
    space16 = null;

    display("tile1", space1);
    display("tile2", space2);
    display("tile3", space3);
    display("tile4", space4);
    
    display("tile5", space5);
    display("tile6", space6);
    display("tile7", space7);
    display("tile8", space8);

    display("tile9", space9);
    display("tile10", space10);
    display("tile11", space11);
    display("tile12", space12);

    display("tile13", space13);
    display("tile14", space14);
    display("tile15", space15);
    display("tile16", null);
}

function display(id, number) {
    var placeholder = document.getElementById(id);
    placeholder.innerHTML = number;
}