/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const found = nums.findIndex(element => element == 0);
    if(found == -1) {
        let product = nums.reduce((a, cv) => {
            a = a*cv
            return a;
        });
        
        if(product < 0) {
            return -1
        } else {
            return 1
        }  
    } else {
        return 0;
    }
};