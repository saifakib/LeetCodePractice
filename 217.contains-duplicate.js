

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let set = {};
    for(let i=0; i<nums.length; i++) 
    {
        if(set[nums[i]]== nums[i]) {
            return true
        } 
        else {
            set[nums[i]] = nums[i]
        }
    }
    return false
};

const nums = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums))



