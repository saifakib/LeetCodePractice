/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let indvalStore = {};
    
    for(let i=0; i<nums.length; i++) {
        if(indvalStore[nums[i]] || indvalStore[nums[i]] == 0) {
            if(i - indvalStore[nums[i]] <= k) {
                return true
            }
            indvalStore[nums[i]] = i
        } else {
            indvalStore[nums[i]] = i
        }
    }
    
    return false;

 
};