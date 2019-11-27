/*
https://www.hackerrank.com/challenges/simple-array-sum/problem
*/
function simpleArraySum(ar) {
    var sum = 0;
    
    for(let elem of ar){
        sum += elem;
    }
    
    return sum;
}
