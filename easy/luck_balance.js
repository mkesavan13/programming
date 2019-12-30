/*
https://www.hackerrank.com/challenges/luck-balance/problem
*/
function luckBalance(k, contests) {
    var total_luck = 0;

    contests.sort(function(a, b){
        return b[0] - a[0];
    });
    
    for(let query of contests){
        let [l,t] = query;
        if(t == 0){
            total_luck += l;
        }
        else{
            if(k > 0){
                total_luck += l;
                k--;
            }
            else{
                total_luck -= l;
            }
        }
    }

    return total_luck;
}
