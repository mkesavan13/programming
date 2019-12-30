/*
https://www.hackerrank.com/challenges/strange-advertising/problem
*/
function viralAdvertising(n) {
    let i = 1, total_liked_count = 0, currently_shared = 5;
    while(i <= n){
        currently_shared = Math.floor(currently_shared / 2);
        total_liked_count += currently_shared;
        currently_shared *= 3
        i++;
    }
    return total_liked_count;
}
