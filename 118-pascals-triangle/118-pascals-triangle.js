/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = Array(numRows);
    
    for(let i=0; i<numRows; i++) {
        let arr = Array(i+1);
        arr[0] = 1;
        arr[arr.length-1] = 1;
        if(arr.length > 2) {
            for(let j=1; j<arr.length-1; j++) {
                arr[j] = output[i-1][j-1] + output[i-1][j];
            }
        }
        output[i] = arr;
    }
    
    return output;
};