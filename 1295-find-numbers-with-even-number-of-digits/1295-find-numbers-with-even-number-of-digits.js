/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    nums.forEach((num) => {
        let len = num.toString().split("").length;
        if(len%2 == 0) {
            count++;
        }
    })
    return count;
};