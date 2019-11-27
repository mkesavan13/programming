/*
https://www.hackerrank.com/challenges/plus-minus/problem?h_r=profile
*/

function plusMinus(arr) {
    var calc = [0,0,0], arrLength = arr.length;

    for(var elem of arr){
        if(elem == 0){
            calc[2]++;
        }
        else if(elem > 0){
            calc[0]++;
        }
        else{
            calc[1]++;
        }
    }

    for(var elem of calc){
        console.log((elem/arrLength).toPrecision(10));
    }
}
