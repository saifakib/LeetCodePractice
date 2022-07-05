/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   // assigned all value except 0 take the first array
    let newIndex = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== 0) {
            nums[newIndex++] = nums[i];
        }
    }
    for(i = newIndex; i < nums.length; i++) {
        nums[newIndex++] = 0;
    }
    
    return nums
};