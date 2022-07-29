/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let hashM = nums.reduce((acc,val) => {
        if(acc[val]) {
            acc[val]++
        } else {
            acc[val] = 1;
        }
        return acc;
    }, {});
    
    return Object.keys(hashM).filter((item) => hashM[item] == 2);
};