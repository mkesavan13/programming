/*
  https://www.hackerrank.com/challenges/new-year-chaos/problem
*/

function minimumBribes(q) {
    var total_bribe_count = 0;
    for(var i = (q.length); i >= 0; i--){
        if(q[i - 1] - i > 2){
            console.log("Too chaotic");
            return;
        }
        for(var j = i - 2; j >= Math.max(0,(q[i - 1] - 2)); j--){
            if(q[j] > q[i - 1]){
                total_bribe_count++;
            }
        }
    }
    console.log(total_bribe_count);
    return;
}
