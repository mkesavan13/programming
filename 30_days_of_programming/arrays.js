/*
https://www.hackerrank.com/challenges/30-arrays/problem
*/
function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    console.log(...arr.reverse());
}
