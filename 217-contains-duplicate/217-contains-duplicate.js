/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     let set = {};
//     for(let i=0; i<nums.length; i++) 
//     {
//         if(set[nums[i]]== nums[i]) {
//             return true
//         } 
//         else {
//             set[nums[i]] = nums[i]
//         }
//     }
//     return false
// };

var containsDuplicate = function(nums) {
    let table = new Set();
    for(let i=0; i<nums.length; i++) 
    {
        if(table.has(nums[i])) {
            return true
        } 
        else {
            table.add(nums[i])
        }
    }
    return false
};