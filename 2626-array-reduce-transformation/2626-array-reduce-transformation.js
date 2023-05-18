/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let acc = init;
    for(const index in nums) {
        acc = fn(acc, nums[index]);
    }
    return acc;
};

// var reduceFunc = (nums, init) => {
//     return nums.reduce((acc, value) => {
//         acc = acc + value;
//         return acc;
//     }, init)
// }

// reduce(reduceFunc());