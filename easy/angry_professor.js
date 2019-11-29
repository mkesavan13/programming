/*
https://www.hackerrank.com/challenges/angry-professor/problem
*/
function angryProfessor(k, a) {
    var present_on_time = 0;
    for( let time of a){
        if(time <= 0){
            present_on_time++;
        }
    }
    if(present_on_time >= k){
        return "NO";
    }
    return "YES";
}
