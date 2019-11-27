/*
https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
*/
function breakingRecords(n, scores) {
    var min, max, worstBeat = 0, bestBeat = 0;
    for(var i = 0; i < n; i++){
        if(typeof min === "undefined"){
            min = max = scores[i];
        }
        else{
            var thisScore = scores[i];
            if(thisScore > max){
                bestBeat++;
                max = thisScore;
            }
            else if(thisScore < min){
                worstBeat++;
                min = thisScore;
            }
        }
    }
    
    return [bestBeat, worstBeat];
}
