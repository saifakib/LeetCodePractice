/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n log n) // for sorting
// MC: O(n)
var thirdMax = function(nums) {
    const uniqueSortArray = [...new Set(nums)];
    uniqueSortArray.sort((a, b) => a - b);
    if (uniqueSortArray.length >= 3) {
      return uniqueSortArray[uniqueSortArray.length - 3];
    } else {
      return uniqueSortArray[uniqueSortArray.length - 1];
    }
};