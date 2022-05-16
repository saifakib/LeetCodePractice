/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    
    /*
    * First here need to find primary and secondary values summation using loop
    * then if its evan length return primary and secondary values summation
    * if its odd length return primary and secondary values summation except duplicate index(matrix mid index value) because its duplicate in both primary and secondary.
    */
    let primary = 0;
    let secondary = 0;
    let len = mat.length;
    
    for(let i=0; i<len; i++) {
        primary += mat[i][i];
        secondary += mat[i][len - i - 1];
    }
    
    let total = primary+secondary;
    if(len%2 == 0) {
        return total;
    }
    else {
        let midIndex = parseInt(len/2); 
        let mid = mat[midIndex][midIndex];
        return total - mid;
    }
};