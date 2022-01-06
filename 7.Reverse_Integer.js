/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(Math.abs(x) > 2147483648) return 0;
    
    let nums = parseInt(x.toString().split("").reverse().join(""))
    
    if(nums > 2147483648) return 0;
    
    if(x > 0) return nums;
    else return -nums;
};

x = 123
console.log(reverse(x))