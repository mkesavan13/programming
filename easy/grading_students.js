/*
https://www.hackerrank.com/challenges/grading/problem
*/
function gradingStudents(grades) {
    // Write your code here
    var result = [];

    for(let mark of grades){
        let grade = mark + (5 - (mark % 5));
        let gDiff = grade - mark;
        if(grade < 40 || gDiff >= 3){
            result.push(mark);
        }
        else{
            result.push(grade);
        }
    }

    return result;
}
