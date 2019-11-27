/*
https://www.hackerrank.com/challenges/apple-and-orange/problem
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var appleCount = 0, orangeCount = 0;

    for(let i = 0; i < apples.length; i++){
        let fallPosition = a + apples[i];
        if(s <= fallPosition && t >= fallPosition){
            appleCount++;
        }
    }

    for(let i = 0; i < oranges.length; i++){
        let fallPosition = b + oranges[i];
        if(s <= fallPosition && t >= fallPosition){
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}
