/*
https://www.hackerrank.com/challenges/between-two-sets/problem
*/
function getTotalX(a, b) {
    // Write your code here
    let maxOfA = a[a.length - 1];
    let minOfB = b[0];
    var multiples = [];
    for(let i = maxOfA; i <= minOfB; i++){
        let allFlag = true;
        for(let j = 0; j < a.length; j++){
            if(i % a[j] !== 0){
                allFlag = false;
                break;
            }
        }
        if(allFlag){
            multiples.push(i);
        }
    }
    var realMultiples = [];
    for(let multiple of multiples){
        let allFlag = true;
        for(let element of b){
            if(element % multiple !== 0){
                allFlag = false;
                break;
            }
        }
        if(allFlag){
            realMultiples.push(multiple);
        }
    }

    return realMultiples.length;
}
