/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = [];
    let count = 0;
    
    while( count !== n ) {
        arr[count] = start + 2 * count;
        count++;
    }
    
    let xorRes = arr.reduce((a, b) => a ^ b);
    
    return xorRes;
};