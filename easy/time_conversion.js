/*
https://www.hackerrank.com/challenges/time-conversion/problem
*/

function timeConversion(s) {
    /*
     * Write your code here.
     */
    var regExp = /(\d+)\:(\d+)\:(\d+)(\w+)/;
    s = s.replace(regExp,function(orig,h,m,s,period){
        if(period == "AM"){
            if(h == "12"){
                h = "00";
            }
        }
        else{
            if(h !== "12"){
                h = (parseInt(h) + 12).toString();
            }
        }
        return h+":"+m+":"+s;
    });
    return s;
}
