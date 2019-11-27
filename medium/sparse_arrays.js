/*
https://www.hackerrank.com/challenges/sparse-arrays/problem
*/
function matchingStrings(strings, queryStrings) {
    var queries = {};
    for(var string of strings){
        if(typeof queries[string] === "undefined"){
            queries[string] = 1;
        }
        else{
            queries[string]++;
        }
    }

    var results = [];

    for(var query of queryStrings){
        if(typeof queries[query] === "undefined"){
            results.push(0);
        }
        else{
            results.push(queries[query]);
        }
    }

    return results;
}
