/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0;
    let right = (matrix.length*matrix[0].length)-1;
    
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        let indvidualLen = matrix[0].length;
        let m = Math.floor(mid/indvidualLen);
        let n = mid%indvidualLen;
        if(matrix[m][n] == target) {
            return true;
        }
        else if(matrix[m][n] < target) {
            left = mid+1;
        }
        else {
            right = mid-1;
        }
    }
    return false;
};