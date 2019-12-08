/*
https://www.hackerrank.com/challenges/js10-template-literals/problem
*/
function sides(literals, ...expressions) {
    const [area, perimeter] = expressions;
    var s1 = (perimeter + Math.sqrt((perimeter * perimeter) - (16 * area)))/4;
    var s2 = (perimeter - Math.sqrt((perimeter * perimeter) - (16 * area)))/4;
    if(s1 > s2){
        return [s2, s1];
    }
    else{
        return [s1, s2];
    }
}
