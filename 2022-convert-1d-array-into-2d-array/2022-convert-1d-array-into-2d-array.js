/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(original.length!=(m*n)){return []};
    
    // Solution 1, where time complexity n^2 foe while loop
//     let output = Array(m).fill().map(x => Array(n).fill(0));
    
//     let [i, j] = [0, 0]
//     while(i < m) {
//         while(j < n) {
//             output[i][j] = original.shift();
//             j++;
//         }
//         i++;
//         j = 0;
//     }
    
//     return output;
    
    // Solution 2
    let output = [];
    let arr = [];
    
    original.forEach((value) => {
        arr.push(value);
        if(arr.length == n) {
            output.push(arr);
            arr = [];
        }
    })
    return output;
};