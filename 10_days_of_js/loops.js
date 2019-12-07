/*
https://www.hackerrank.com/challenges/js10-loops/problem
*/
function vowelsAndConsonants(s) {
    let constants="";
    for(let char of s){
        switch(char){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                console.log(char);
                break;
            default:
                constants+=(char+'\n');
        }
    }
    console.log(constants);
}
