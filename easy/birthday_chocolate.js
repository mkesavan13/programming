/*
https://www.hackerrank.com/challenges/the-birthday-bar/problem
*/
function birthday(chocArray, bday, bmonth) {
    var count = 0;
    
    for(var i = 0; i < chocArray.length; i++){
        let sum = 0;
        
        for(var j = 0; j < bmonth; j++){
            sum += chocArray[i + j];
        }

        if(sum == bday){
            count++;
        }
    }

    return count;
}
