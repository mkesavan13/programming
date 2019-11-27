/*
  https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
*/
function jumpingOnClouds(c) {
    var noOfJumps = 0;
    let i = 0;
    while(i < c.length){
        if(i > 0){
            noOfJumps++;
        }
        let thisChar = c[i], twoStepChar = c[i+2];
        if(twoStepChar != undefined && twoStepChar == 0){
            i+=2;
        }
        else{
            i++;
        }
    }
    return noOfJumps;
}
