/*
  https://www.hackerrank.com/challenges/counting-valleys/problem
*/
function countingValleys(n, s) {
    var valley_count = 0, valleyBegins = false, ground_level = 0;
    for(let i = 0; i < n; i++){
        if(s[i] == 'U'){
            ground_level++;
            if(ground_level == 0){
                valley_count++;
                valleyBegins = false;
            }
        }
        else{
            ground_level--;
            if(ground_level < 0){
                valleyBegins = true;
            }
        }
    }
    return valley_count;
}
