/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let output = nums.reduce((acc, val) => {
        acc.push(val * val);
        return acc;
    }, []);
    
    return output.sort((a, b) => a-b);
};