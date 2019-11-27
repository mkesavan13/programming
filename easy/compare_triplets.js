/*
  https://www.hackerrank.com/challenges/compare-the-triplets/problem
*/
function compareTriplets(a, b) {
    var alice_points = 0, bob_points = 0;
    
    for (var i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            alice_points++;
        }
        else if(b[i] > a[i]){
            bob_points++;
        }
    }

    return [alice_points,bob_points];
}
