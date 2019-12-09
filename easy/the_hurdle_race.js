/*
https://www.hackerrank.com/challenges/the-hurdle-race/problem
*/
function hurdleRace(k, height) {
    height = height.sort(function(a,b){return a - b;});
    var maxHeight = height[height.length - 1];
    if(k < maxHeight){
        return maxHeight - k;
    }
    else{
        return 0;
    }
}
