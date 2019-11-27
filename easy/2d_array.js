/*
https://www.hackerrank.com/challenges/2d-array/problem
*/
function hourglassSum(arr,start_row = 0,start_col = 0,high_total) {
    if(typeof arr[start_row+2] == "undefined"){
        return high_total;
    }
    
    if(typeof arr[start_row][start_col+2] == "undefined"){
        return hourglassSum(arr,start_row+1,0,high_total);
    }

    var new_total = arr[start_row][start_col] + 
                    arr[start_row][start_col + 1] +
                    arr[start_row][start_col + 2] +
                    arr[start_row + 1][start_col + 1] +
                    arr[start_row + 2][start_col] + 
                    arr[start_row + 2][start_col + 1] +
                    arr[start_row + 2][start_col + 2];

    if(typeof high_total === "undefined" || new_total > high_total){
        high_total = new_total;
    }

    return hourglassSum(arr,start_row,start_col+1,high_total);
}
