/*
https://www.hackerrank.com/challenges/a-very-big-sum/problem
*/

function aVeryBigSum(ar) {
    var total = 0;

    while(ar.length){
        total += ar.shift();
    }

    return total;
}
