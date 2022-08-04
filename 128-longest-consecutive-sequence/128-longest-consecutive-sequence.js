/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //nums = new Set(nums);
    
    if(nums.length < 1) return 0;
    
    let result = 1;
    
    nums = nums.sort((a,b) => a-b);
    
    let count = 1;
    
    for(let i=0; i<nums.length-1; i++) {
        if(nums[i+1] - nums[i] > 1) {
            count = 1;
        } else if(nums[i+1] - nums[i] == 1){
            count++;
            if(result < count) result = count;
        }
    }
    return result;
};