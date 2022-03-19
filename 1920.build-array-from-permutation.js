/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    let solutions = []
    for(let number of nums) {
        solutions.push(nums[number])
    }
    return solutions
};