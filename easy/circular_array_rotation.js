/**
https://www.hackerrank.com/challenges/circular-array-rotation/problem?h_r=profile
**/
function rotate(x){
    var toRotate = x.pop();
    x.unshift(toRotate);
    return x;
}

// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
    for( let i = 0; i < k; i++){
        a = rotate(a);
    }

    let resultant = [];

    for(let query of queries){
        resultant.push(a[query]);
    }

    return resultant;
}
