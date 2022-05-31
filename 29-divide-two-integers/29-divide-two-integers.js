/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    let res = dividend/divisor;
    if(res < 0) {
        let absed = Math.abs(res);
        res = -Math.floor(absed);
    } else {
         res = Math.floor(res);
    }
    if(res > 2147483647) return 2147483647;
    return res;
};