/*
https://www.hackerrank.com/challenges/dynamic-array/problem
*/
function dynamicArray(n, queries) {
    const sequenceList = '0'.repeat(n).split('').map(x => []);
    var lastAnswer = [], lastAns = 0;
    for(var query of queries){
        var [a,x,y] = query;
        var sequence = (x^lastAns) % n;
        if(a == 2){
            var index = y % sequenceList[sequence].length;
            lastAns = sequenceList[sequence][index];
            lastAnswer.push(sequenceList[sequence][index]);
        }
        else{
            sequenceList[sequence].push(y);
        }
    }
    return lastAnswer;
}
