/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;
    
    if(m*n != r*c ) {
        return mat
    } 
    else {
        let output = new Array(r).fill(0).map(() => new Array(c).fill(0));
        let row = 0
        let col = 0
        
        // traverse matrix
        for(let i=0; i<m; i++) {
            for(let j=0; j<n; j++) {
                //take a value from oldest matrix
                output[row][col] = mat[i][j]
                col++
                if(col == c) {
                    row++;
                    col = 0
                }
            }
        }
        return output
    }
};

