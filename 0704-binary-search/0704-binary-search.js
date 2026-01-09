/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function midIndex (left, right) {
    return  Math.floor((left+right)/2);
}

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = midIndex(left, right);
    
    while(left<=right) {
        if(nums[mid] > target) {
            right = mid-1;
            mid = midIndex(left, right);
        } else if(nums[mid] < target) {
            left = mid+1;
            mid = midIndex(left, right);
        } else {
            return mid;
        }
    }
    return -1;
};