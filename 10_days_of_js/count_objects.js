/*
https://www.hackerrank.com/challenges/js10-count-objects/problem
*/
function getCount(objects) {
    var count = 0;
    for(let object of objects){
        if(object.x == object.y){
            count++;
        }
    }
    return count;
}
