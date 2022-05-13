/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length == 1) return false;
    let sorted = arr.sort((a, b) => a -b);
    let distance = sorted[1] - sorted[0];
    
    for(let i=1; i<sorted.length; i++) {
        if(sorted[i] - sorted[i-1] !== distance) {
            return false
        }
    }
    return true;
};