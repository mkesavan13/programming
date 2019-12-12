/*
https://www.hackerrank.com/challenges/30-binary-numbers/problem
*/
function main() {
    var n = parseInt(readLine(), 10);
    n = n.toString(2).split("0");
    let max = Math.max(...n);
    console.log(max.toString().length);
}
