/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    let output = [];
    
    let nums1str = nums1.reduce((obj, val) => {
        if(obj[val]) {
            obj[val]++;
        } else {
            obj[val] = 1;
        }
        return obj;
    }, {});
    
    nums2.forEach((val) => {
        if(nums1str[val]) {
            if(nums1str[val] > 1) {
                nums1str[val]--;
            } else {
                delete nums1str[val];
            }
            output.push(val)
        }
    });
    
    return output;
};