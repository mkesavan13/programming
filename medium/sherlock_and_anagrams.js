/*
https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
*/

function sherlockAndAnagrams(s) {
    var anagram_count = 0;
    for(var i = 1; i < s.length; i++){
        let substrings = {};
        for(var j = 0; (j + i) <= s.length; j++){
            var substring = s.substr(j, i);
            substring = substring.split('').sort().join();
            if(substrings[substring]){
                anagram_count += substrings[substring];
                substrings[substring]++;
            }
            else{
                substrings[substring] = 1;
            }
        }
    }
    return anagram_count;
}
