/*
https://www.hackerrank.com/challenges/migratory-birds/problem
*/
function migratoryBirds(arr) {
    let eachKind = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    for(var i = 0; i < arr.length; i++){
        eachKind[arr[i]]++;
    }

    var toReturn, prev;

    for(var kind in eachKind){
        if(typeof prev !== "undefined"){
            if(prev < eachKind[kind]){
               toReturn = kind;
               prev = eachKind[kind];
            }
        }
        else{
            prev = eachKind[kind];
            toReturn = kind;
        }
    }
    
    return toReturn;
}
