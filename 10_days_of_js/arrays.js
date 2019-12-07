/*
https://www.hackerrank.com/challenges/js10-arrays/problem
*/
function getSecondLargest(nums) {
    // Complete the function
    for(var i = 0; i < nums.length; i++){
        for(var j = (i + 1); j < nums.length; j++){
            if(nums[i] < nums[j]){
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i + 1]){
            if(nums[i] > nums[i + 1]){
                return nums[i + 1];
            }
        }
        else{
            return nums[i];
        }
    }
}
