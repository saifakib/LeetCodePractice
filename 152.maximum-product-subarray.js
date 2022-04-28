/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    if(nums.length == 1) return nums[0];
    
    let global_g = nums[0];

    for(let i=0; i<nums.length; i++) {
        if(i == nums.lenght-1) {
            if(global_g > nums[i]){
                return global_g
            }
            return nums[i];
        }
        let max_g = max_l = max_v = nums[i];
        max_v = max_v*nums[i+1];
        max_l = Math.max(nums[i+1], max_l*nums[i+1]);
        if(max_v > max_l) {
            max_l = max_v
        }
        if(max_g < max_l) max_g = max_l;
        if(global_g < max_g) global_g = max_g;
    }
    return global_g;
};

console.log(maxProduct([2,-3,-2,-4,3]));