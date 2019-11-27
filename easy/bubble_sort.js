/*
https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
*/

function countSwaps(a) {
    var swaps = 0, n = a.length;
    
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                swaps++;
            }
        } 
    }

    console.log("Array is sorted in "+swaps+" swaps.")
    console.log("First Element: "+a[0]);
    console.log("Last Element: "+a[a.length - 1]);
    return;
}
