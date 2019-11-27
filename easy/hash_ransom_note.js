/*
https://www.hackerrank.com/challenges/ctci-ransom-note/problem
*/
function checkMagazine(magazine, note) {
    var prepareNoteLength = 0;
    for(let word of note){
        if(magazine.includes(word)){
            var thisWordIndex = magazine.indexOf(word);
            magazine.splice(thisWordIndex,1);
            prepareNoteLength++;
        }
    }
    if(prepareNoteLength === note.length){
        console.log("Yes");
        return;
    }
    console.log("No");
    return;
}
