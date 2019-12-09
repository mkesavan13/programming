/*
https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem
*/
function telephoneDirectory(input) {
    //Enter your code here
    var eachLine = input.split("\n");
    var count = parseInt(eachLine.shift());
    var number_map = {}, i = 0;
    while(i < count){
        let [name,phoneNumber] = eachLine[i].split(" ");
        number_map[name] = phoneNumber;
        i++;
    }
    while(i < eachLine.length){
        let name = eachLine[i];
        if(typeof number_map[name] !== "undefined"){
            console.log(name + "=" + number_map[name]);
        }
        else{
            console.log("Not found");
        }
        i++;
    }
}
