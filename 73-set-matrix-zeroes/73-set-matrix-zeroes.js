/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // let rowSet = new Set();
    let coloumSet = new Set();
    
    matrix.forEach((arr, index) => {
        let find0 = arr.indexOf(0);
        if(find0 !== -1) {
            arr.forEach((ele, ind) => {
                if(ele === 0) {
                    coloumSet.add(ind)
                }
            });
            // rowSet.add(index);
            matrix[index].fill(0);
        }
    });
    
    // rowSet.forEach((item) => matrix[item].fill(0));
    coloumSet.forEach((itemInd) => {
        matrix.forEach((arr) => {
            arr[itemInd] = 0;
        })
    })
    
    return matrix;
};