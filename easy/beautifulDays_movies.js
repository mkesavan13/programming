/*
https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
*/
function beautifulDays(begin, end, k) {
    let beautifulDays = 0;
    for(let i = begin; i <= end; i++){
        let reverse = parseInt(i.toString().split('').reverse().join(''));
        let diff = Math.abs(i - reverse);
        if(diff % k === 0){
            beautifulDays++;
        }
    }
    return beautifulDays;
}
