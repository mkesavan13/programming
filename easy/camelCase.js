/*
https://www.hackerrank.com/challenges/camelcase/problem
*/
function camelcase(s) {
    return s.split(/(?=[A-Z]+)/).length;
}
