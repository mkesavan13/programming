/*
https://www.hackerrank.com/challenges/js10-throw/problem
*/
function isPositive(a) {
    try{
        if(a > 0){
            return "YES";
        }
        else if(a === 0){
            throw "Zero Error"
        }
        else{
            throw "Negative Error"
        }
    }
    catch(e){
        return e;
    }
}

