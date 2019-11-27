/*
https://www.hackerrank.com/challenges/extra-long-factorials/problem
*/
function extraLongFactorials(n) {
    var fact = BigInt(1);
    for(var i = BigInt(1); i <= n; i++){
        fact = fact * i;
    }
    console.log(fact.toString());
}
