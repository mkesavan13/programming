/*
https://www.hackerrank.com/challenges/js10-arrows/problem
*/
function modifyArray(nums) {
   for(let i = 0; i < nums.length; i++){
       if(nums[i] % 2 == 0){
           nums[i] *= 2;
       }
       else{
           nums[i] *= 3;
       }
   }
   return nums;
}
