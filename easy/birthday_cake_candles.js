/*
https://www.hackerrank.com/challenges/birthday-cake-candles/problem
*/

function birthdayCakeCandles(ar) {
    var total = {}, tallest = 0;
    for(var elem of ar){
        if(total[elem]){
            total[elem]++;
        }
        else{
            total[elem] = 1;
        }
        tallest = Math.max(tallest, elem);
    }

    return total[tallest];
}
