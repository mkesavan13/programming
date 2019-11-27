/*
https://www.hackerrank.com/challenges/diagonal-difference/problem
*/

function diagonalDifference(arr) {
    // Write your code here
    var sum1 = 0, sum2 = 0, arrLength = arr.length - 1;

    for(var i = 0; i <= arrLength; i++){
        sum1 += arr[i][i];
        var j = arrLength - i;
        sum2 += arr[i][j];
    }

    return Math.abs(sum1 - sum2);

}
