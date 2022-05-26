/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {};
    let max = 0;
    let maxValue=nums[0];
    
    nums.forEach((item) => {
        if(hash[item]) {
            hash[item]++;
        }else {
            hash[item]= 1;
        }
    })
    const res = Object.keys(hash).forEach((ele) => {
        if(hash[ele] > max) {
            max = hash[ele];
            maxValue = ele;
        }
    })
    return maxValue;
};