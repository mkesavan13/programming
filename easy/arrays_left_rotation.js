/*
https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
*/
function rotLeft(arr, no_of_rotations) {
    var toRotate = arr.splice(0,no_of_rotations);
    arr.push(...toRotate);
    return arr;
}
