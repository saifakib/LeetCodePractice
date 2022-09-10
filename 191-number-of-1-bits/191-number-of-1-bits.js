/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
//     let binary = n.toString(2).split("");
//     let count = 0;
    
//     binary.forEach(num => {
//         if(num == 1) count++
//     });
//     return count;
    
    return n.toString(2).split("0").join("").length;
};