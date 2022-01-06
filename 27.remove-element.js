/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    for(let j=0; j<nums.length; j++) {
        if(nums[j] != val){
            nums[i] = nums[j]
            ++i
        }
    }
    return i
};

let nums = [3,2,2,3], val = 3
console.log(removeElement(nums, val))