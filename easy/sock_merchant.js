/*
  https://www.hackerrank.com/challenges/sock-merchant/submissions/code/126468876
*/

function sockMerchant(n, ar) {
    let sorted={},result=0;
    for(let sock of ar){
        if(typeof sorted[sock] === "undefined"){
            sorted[sock]=1;
        }
        else{
            sorted[sock]++;
        }
        let num_pairs=Math.floor(sorted[sock]/2);
        if(num_pairs != 0){
            result = result + num_pairs;
            sorted[sock]=0;
        }
    }
    return result;
}
