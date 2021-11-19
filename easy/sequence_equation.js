/**
https://www.hackerrank.com/challenges/permutation-equation/problem?h_r=profile
**/
function permutationEquation(p) {
    let positions = {};
    for(let i = 1; i <= p.length; i++){
        positions[p[i - 1]] = i;
    }
    let resultant = [];
    for(let i = 1; i <= p.length; i++){
        resultant.push(positions[positions[i]]);
    }
    return resultant;
}
