/**
https://www.hackerrank.com/challenges/kaprekar-numbers/problem?h_r=profile
**/
function kaprekarNumbers(p, q) {
    let resultant = [];
    for( let i = p; i <= q; i++){
        if(i == 1 || i == 0){
            resultant.push(i);
            continue;
        }
        let i_digits = i.toString().length;
        let n = i * i;
        n = n.toString();
        let n_digits = n.length;
        let left = parseInt(n.substring(0,(n_digits - i_digits)));
        let right = parseInt(n.substring((n_digits - i_digits),n_digits));
        if(left+right == i){
            resultant.push(i);
        }
    }

    if(resultant.length){
        console.log(...resultant);
    }
    else{
        console.log("INVALID RANGE");
    }
}
