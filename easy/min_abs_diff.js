/*
https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
*/

function minimumAbsoluteDifference(arr) {
    arr.sort();

    var min_diff = Math.abs(arr[0] - arr[1]);

    for(var i = 1; i < arr.length; i++){
        var abs_diff = Math.abs(arr[i] - arr[i+1]);
        if(abs_diff < min_diff){
            min_diff = abs_diff;
        }
    }

    return min_diff;
}
