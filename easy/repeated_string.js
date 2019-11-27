/*
https://www.hackerrank.com/challenges/repeated-string/problem
*/
function repeatedString(s, n) {
    if(s == 'a'){
        return n;
    }
    var prepared_string_length = 0, noOfA_input = 0, noOfA_output = 0;
    for(let char of s){
        if(char == 'a'){
            noOfA_input++;
        }
    }
    var no_of_times = Math.floor(n/s.length);
    prepared_string_length = no_of_times * s.length;
    noOfA_output = no_of_times * noOfA_input;
    let i = 0;
    while(prepared_string_length < n){
        var thisChar = s[i];
        prepared_string_length++;
        if(thisChar == 'a'){
            noOfA_output++;
        }
        i++;
    }
    return noOfA_output;
}
