/*
https://www.hackerrank.com/challenges/mini-max-sum/problem
*/
function miniMaxSum(arr) {
    arr = arr.sort(function(a, b){return a-b});
    var sum1 = 0, sum2 = 0;
    for(var i = 1; i < arr.length - 1; i++){
        sum1 += arr[i];
    }

    sum2 = sum1;
    
    sum1 += arr[0];
    sum2 += arr[arr.length - 1];

    console.log(sum1 +" "+sum2);
}
