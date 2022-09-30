/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let obj = {};
    nums = nums.sort((a, b) => a-b);
    
    let list = nums.reduce((acc, value, index, nums) => {
        let left = index + 1;
        let right = nums.length - 1;
        
        while(left < right) {
            let summation = value + nums[left] + nums[right];
            if(summation === 0) {
                if(!obj[[value, nums[left], nums[right]]]) {
                    acc.push([value, nums[left], nums[right]]);
                    obj[[value, nums[left], nums[right]]] = 1;
                    left++;
                    right--;
                }
                else {
                    left++;
                    right--;
                    continue;
                }
            }
            else if(summation < 0) {
                if(nums[left] === nums[left+1]) {
                    left = left + 2;
                }
                else {
                    left = left + 1;
                }
            }
            else {
                if(nums[right] === nums[right-1]) {
                    right = right - 2;
                }
                else {
                    right = right - 1;
                }
            }
        }
        return acc;
    }, [])
    
    return list;
};
