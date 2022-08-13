/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let gmax = 0
    
    nums.forEach((val) => {
        if(val === 1) {
            max++;
            if(gmax < max) {
                gmax = max;
            }
        } else {
            if(gmax < max) {
                gmax = max;
            }
            max = 0;
        }
    });
    
    return gmax;
};