/*
https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem
*/
function reverseString(s) {
    try{
        s = s.split('').reverse().join('');
        console.log(s);
    }
    catch(e){
        console.log(e.message);
        console.log(s);
    }
}

