/*
https://www.hackerrank.com/challenges/electronics-shop/problem
*/
function getMoneySpent(keyboards, drives, monica_can_afford) {
    keyboards.sort(function(a, b){ return a - b});
    drives.sort(function(a, b){ return a - b});
    var monica_will_spend = -1;
    for(let keyboard of keyboards){
        for(let drive of drives){
            let total = keyboard + drive;
            if(total <= monica_can_afford){
                monica_will_spend = total;
                break;
            }
        }
    }

    for(let drive of drives){
        for(let keyboard of keyboards){
            let total = keyboard + drive;
            if(total <= monica_can_afford && total > monica_will_spend){
                monica_will_spend = total;
                break;
            }
        }
    }
    return monica_will_spend;
}
