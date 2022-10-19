/**
 * @param {number} n
 * @return {number}
 */

let obj = {}

var fib = function(n) {
    
    if(obj[n]) return obj[n];
    
    if(n == 0 || n == 1) {
        return n;
    }
    
    return obj[n] = fib(n-1) + fib(n-2);
    
};