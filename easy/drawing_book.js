/*
https://www.hackerrank.com/challenges/drawing-book/problem
*/
function pageCount(n, p) {
    var front_count = Math.floor(p / 2);
    var total_count = Math.floor(n / 2);
    var back_count = total_count - front_count
    return (front_count > back_count) ? back_count:front_count;
}
