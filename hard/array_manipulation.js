/*
https://www.hackerrank.com/challenges/crush/problem
For this, should learn difference array concept
*/
function arrayManipulation(n, queries) {
    var max = 0, sum=0, result = new Array(n + 1).fill(0);
    
    for(let i = 0; i < queries.length; i++){
        const [start,end,value] = queries[i];
        result[start - 1] += value;
        result[end] -= value;
    }
    for(let j = 0; j < n; j++){
        sum += result[j];
        max = Math.max(max,sum);
    }
    return max;
}
