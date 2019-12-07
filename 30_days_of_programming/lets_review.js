/*
https://www.hackerrank.com/challenges/30-review-loop/problem
*/
function processData(input) {
    //Enter your code here
    input = input.split("\n");
    let n = input[0];
    for( let i = 1; i <= parseInt(n); i++ ){
        letsReview(input[i]);
    }
} 

function letsReview(string){
    let evenString = "", oddString = "";
    for( let i = 0; i < string.length; i++ ){
        if(i == 0 || i % 2 == 0){
            evenString += string[i];
        }
        else{
            oddString += string[i];
        }
    }
    console.log(evenString +" "+ oddString);
}
