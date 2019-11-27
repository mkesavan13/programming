/*
https://www.hackerrank.com/challenges/reduced-string/problem
*/
function superReducedString(arr) {
    arr = arr.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
            i = -1;
        }
    }
    if (arr.length === 0) {
        return "Empty String";
    } else {
        return arr.join('').toString();
    }
}
