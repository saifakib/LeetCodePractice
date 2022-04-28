/**
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => b - a);
    return nums[k-1];
};

const nums = [3,2,3,1,2,4,5,5,6], k=4;
console.log(findKthLargest(nums, k));
