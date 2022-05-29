/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // using hash table for checking that value allready exits
    let hash = {};
    
    let response = [];
    nums1.forEach((item) => {
        if(!hash[item]) {
            let find = nums2.find((element) => element == item );
            if(typeof(find) == 'number') {
                response.push(item);
                hash[item] = item;
            }
        }
    })
    return response;
};