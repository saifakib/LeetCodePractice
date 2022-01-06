/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let solutoin = []
    for(let index=0; index<nums.length - 1; index++) {
        for(let innerindex=index+1; innerindex<nums.length; innerindex++) {
            if(nums[index] + nums[innerindex] == target) {
                solutoin.push(index, innerindex)
                return solutoin;
            }
        }
    }
};

let nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))