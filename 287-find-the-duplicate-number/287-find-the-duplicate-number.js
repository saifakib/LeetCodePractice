/**
 * @param {number[]} nums
 * @return {number}
 */


// First Approach

// var binarySearch = function(s, nums) {
//     nums = nums.sort((a, b) => a-b);
//     let left=0;
//     let right=nums.length-1;
//     let mid = parseInt((left+right)/2);
    
//     while(left <= right) {
//         if(nums[mid] == s) {
//             return true;
//         }
//         if(nums[mid] < s) {
//             left = mid+1;
//             mid = parseInt((left+right)/2);
//         }
//         if(nums[mid] > s) {
//             right = mid-1;
//             mid = parseInt((left+right)/2);
//         }
//     }
//     return false;
// }

// var findDuplicate = function(nums) {
//     for(let i=0; i<nums.length - 1; i++) {
//         let copy = [ ...nums ];
//         copy.splice(0, i+1)
//         let res = binarySearch(nums[i], copy);
//         if(res) return nums[i]
//     }
// };

// 2nd Approach (Apply Floyd's Cycle Finding Algorithm)
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    
    while(slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    
    slow = 0;
    
    while(slow !== fast) {
        slow = nums[slow]
        fast = nums[fast];
    }
    
    return slow;
}
