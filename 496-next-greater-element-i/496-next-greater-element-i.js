/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let output = [];
    
    nums1.forEach((item) => {
        let findIndex = nums2.findIndex((val) => val === item);
        if(findIndex < nums2.length - 1) {
            for(let i=findIndex+1; i < nums2.length; i++) {
                if(nums2[i] > item) {
                    output.push(nums2[i])
                    return;
                }
            }
            output.push(-1);
        }
        else {
            output.push(-1);
        }
    });
    
    return output;
};