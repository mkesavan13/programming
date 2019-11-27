/*
https://www.hackerrank.com/challenges/marcs-cakewalk/problem?h_r=profile
*/
function marcsCakewalk(n, calorie) {
    calorie.sort(function(a, b){
        return a-b;
    });

    var sum = 0;

    for(var i = (n - 1), j = 0; i >= 0; i--, j++){
        sum += Math.pow(2, j) * calorie[i];
    }

    return sum;
}
