/*
https://www.hackerrank.com/challenges/30-sorting/problem
*/
function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    let swapCount = 0;
    // Write Your Code Here
    for( let i = 0; i < a.length; i++){
        for( let j = (i + 1); j < a.length; j++){
            if(a[i] > a[j]){
                let temp = a[j];
                a[j] = a[i];
                a[i] = temp;
                swapCount++;
            }
        }
    }
    console.log("Array is sorted in "+swapCount+" swaps.");
    console.log("First Element: "+a[0]);
    console.log("Last Element: "+a[a.length - 1]);
}
