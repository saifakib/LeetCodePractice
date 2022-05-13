/**
 * @param {number} n
 * @return {boolean}
 */

var sumSquares = function(num) {
    let sum = 0;
    num.toString().split("").forEach(i => sum += i*i);
    return sum;
}
var isHappy = function(n) {
    if(n < 1) return false;
    
    let obj = {}
    
    let exp = sumSquares(n);
    while(exp != 1) {
        if(obj[exp]) {
            return false;
        }
        obj[exp] = exp;
        exp = sumSquares(exp)
    }
    return true;
};