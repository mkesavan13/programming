/*
https://www.hackerrank.com/challenges/js10-data-types/problem
*/
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    console.log(firstInteger+parseInt(secondInteger));
    
    const firstDecimal = 4.0;
    console.log(firstDecimal+parseFloat(secondDecimal));

    const firstString = 'HackerRank ';
    console.log(firstString+secondString);
}
