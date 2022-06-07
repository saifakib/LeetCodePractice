/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = -1;
    nums.forEach((item) => {
        let len = nums.filter((element) => element == item).length;
        if(len == 1){
            res = item;
        }
    })
    return res;
};