/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let pairCount = 0;
    for(let i=0; i<nums.length; i++) {
        let j = i+1;
        while(j<nums.length) {
            if(nums[i] == nums[j]) {
                pairCount++;
            }
            j++;
        }
        
    }
    return pairCount;
};