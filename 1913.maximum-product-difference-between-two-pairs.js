/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    nums = nums.sort((a, b) => a - b)
    let firstPair = (nums.pop() * nums.pop())
    let secondPair = (nums.shift() * nums.shift())
    return firstPair - secondPair
};

