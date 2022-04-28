/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // Big o(n^2)
    let solutoin = []
    for(let index=0; index<nums.length - 1; index++) {
        for(let innerindex=index+1; innerindex<nums.length; innerindex++) {
            if(nums[index] + nums[innerindex] == target) {
                solutoin.push(index, innerindex)
                return solutoin;
            }
        }
    }

    // Big o(n)
    let numsWithPosition = {};
    for(let i=0; i<nums.length; i++) {
        let adjacent = target - nums[i];
            
        if(numsWithPosition[adjacent] !== undefined) {
            return [i, numsWithPosition[adjacent]]
        }
        numsWithPosition[nums[i]] = i;
    }
};

let nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))