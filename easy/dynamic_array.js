/*
https://www.hackerrank.com/challenges/array-left-rotation/problem
*/

function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const rotation = parseInt(nd[1], 10);

    const array = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    var toRemove = array.splice(0,rotation);
    array.push(...toRemove);
    console.log(array.join(" "));
}
