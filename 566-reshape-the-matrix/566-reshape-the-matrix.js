/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
//     let redesign = [];
//     let result = [];
    
//     // create a new array without subarray
//     mat.forEach(parr => {
//         parr.forEach(ar => redesign.push(ar))
//     })
    
//     // here the number that how many element have a array
//     let rowlen = redesign.length/r;
    
//     // count for redesign element
//     let count = 0;
    
//     // loop for count row
//     for(let i=0; i<r; i++) {
//         let temp = [];
//         // loop for count rowlength to create a new array
//         for(let j=0; j<rowlen; j++) {
//             temp[j] = redesign[count];
//             count++
//         }
//         // Every time create a new subarray and push it to result array;
//         result.push(temp)
//     }
    
//     return result;
    
    let m = mat.length;
    let n = mat[0].length;
    
    if(m*n !== r*c) {
        return mat
    }
    
    let output = new Array(r).fill(0).map(() => new Array(c).fill(0));
    let row = 0;
    let col = 0;
    
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            output[row][col] = mat[i][j];
            col++;
            if(col == c) {
                col = 0;
                row++
            }
        }
    }
    
    return output;
};