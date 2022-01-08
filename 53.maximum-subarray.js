/**
 * @param {number[]} nums
 * @return {number}
 */

// Use Kadane's Algo
var maxSubArray = function(nums) {
    if(nums.length == 1) return nums[0]
    
    let max_g = max_c = nums[0]
    
    for(let i=1; i<nums.length; i++) {
        max_c = Math.max(nums[i], max_c+nums[i])
        
        if(max_c > max_g) max_g = max_c
    }
    return max_g
    
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(nums)