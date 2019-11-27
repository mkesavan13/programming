/*
https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
*/
function divisibleSumPairs(n, div, ar) {
    let pairsCount = 0;
    for(var i = 0; i < n; i++){
        let now = ar[i];
        for(var k = (i + 1); k < n; k++){
            let sum = now + ar[k];
            if(sum % div == 0){
                pairsCount++;
            }
        }
    }
    return pairsCount;
}
