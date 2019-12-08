/*
https://www.hackerrank.com/challenges/js10-class/problem
*/
class Polygon{
    constructor(length_of_sides){
        this.length_of_sides = length_of_sides;
    }

    perimeter(){
        var total = 0;
        for(let side_length of this.length_of_sides){
            total += side_length;
        }
        return total;
    }
}
