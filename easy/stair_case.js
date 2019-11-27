/*
https://www.hackerrank.com/challenges/staircase/problem
*/

function staircase(n) {
    for(var i = 0; i < n; i++){
        var arr = new Array(n).fill('#');
        arr = arr.fill(' ' , 0, n - 1 - i).join('');
        console.log(arr);
    }
}
