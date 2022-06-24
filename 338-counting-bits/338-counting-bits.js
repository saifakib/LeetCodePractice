/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = [];
    for(let i=0; i<=n; i++) {
        let len = i.toString(2).split('0').join('').length;
        res[i] = len;
    }
    return res;
};