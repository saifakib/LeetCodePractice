/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let expectedNums = []
//     let n = nums[0]
//     const last = nums[nums.length- 1]
    
//     for(let i=0; i<nums.length; i++) {
//         if(nums[i] === last) expectedNums.push(nums[i]);
//         else if(n != nums[i+1]) {
//             expectedNums.push(nums[i])
//             n = nums[i+1]
//         }
        
//     }
//     return expectedNums.length
// };

var removeDuplicates = function(nums) {
    let i = 0
    for(let j=1; j<nums.length; j++) {
        if(nums[i] != nums[j]) {
            nums[++i] = nums[j]
        }
    }
    return ++i
};

let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))