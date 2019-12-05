/*
https://www.hackerrank.com/challenges/30-conditional-statements/problem
*/

function weirdOrNot(n){
    let isEven = n % 2 == 0;
    if(!isEven || (isEven && n >= 6 && n <= 20)){
        return "Weird";
    }
    else if(isEven && ((n >= 2 && n <=5) || n > 20)){
        return "Not Weird";
    }
}
