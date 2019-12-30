/*
https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
*/
function catAndMouse(catA, catB, mouseC) {
    let catAUnits = Math.abs(mouseC - catA), catBUnits = Math.abs(mouseC - catB);
    if(catAUnits === catBUnits){
        return "Mouse C";
    }
    else if(catAUnits < catBUnits){
        return "Cat A";
    }
    return "Cat B";
}
