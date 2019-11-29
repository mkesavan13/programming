/*
https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
*/
function designerPdfViewer(list_height, word) {
    var charArray = {};
    var tallest = 0;
    for(var i = 0; i < word.length; i++){
        let ascii = word.charCodeAt(i);
        let heightIndex = ascii - 97;
        var thisHeight = list_height[heightIndex];
        tallest = tallest < thisHeight ? thisHeight : tallest;
    }
    return tallest * word.length;
}
