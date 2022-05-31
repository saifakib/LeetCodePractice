/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let posArr = [];
    let negArr = [];
    let resArr = [];
    nums.forEach((item) => {
        if(Math.sign(item) == 1) {
            posArr.push(item)
        }
        else {
            negArr.push(item)
        }
    });
    posArr.forEach((element, index) => {
        resArr.push(element, negArr[index])
    })
    return resArr;
};