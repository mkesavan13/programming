/*
https://www.hackerrank.com/challenges/js10-date/problem
*/
function getDayName(dateString) {
    let dayName = new Date(dateString).toDateString().split(" ")[0];
    switch(dayName){
        case "Sun":
            return "Sunday";
        case "Mon":
            return "Monday";
        case "Tue":
            return "Tuesday";
        case "Wed":
            return "Wednesday";
        case "Thu":
            return "Thursday";
        case "Fri":
            return "Friday";
        case "Sat":
            return "Saturday";
    }
}
