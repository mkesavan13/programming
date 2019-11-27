/*
https://www.hackerrank.com/challenges/mark-and-toys/problem
*/
function maximumToys(prices, k) {
    var total_so_far = 0, n = prices.length;
    
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            if (prices[i] > prices[j]) {
                var temp = prices[j];
                prices[j] = prices[i];
                prices[i] = temp;
            }
        }
        total_so_far += prices[i] ;
        if(total_so_far > k){
            return i;
        }
    }
}
