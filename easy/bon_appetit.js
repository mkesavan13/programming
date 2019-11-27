/*
https://www.hackerrank.com/challenges/bon-appetit/problem
*/
function bonAppetit(bill, k, b) {
    let actual_b = 0;
    for(let i = 0; i < bill.length; i++){
        if(i !== k){
            actual_b += bill[i];
        }
    }
    actual_b /= 2;
    if(actual_b === b){
        console.log("Bon Appetit");
    }
    else{
        console.log(b - actual_b);
    }
}
