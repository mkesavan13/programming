/*
https://www.hackerrank.com/challenges/two-strings/problem
*/
function twoStrings(s1, s2) {
    for(let letter of s1){
        if(s2.includes(letter)){
            return "YES";
        }
    }
    return "NO";
}
