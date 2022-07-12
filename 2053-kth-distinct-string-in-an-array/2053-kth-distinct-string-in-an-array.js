/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let hashObj = arr.reduce((acc, val) => {
        if(acc[val]) {
            acc[val]++;
        } else {
            acc[val] = 1;
        }
        return acc;
    }, {});
    
    const distinct = Object.keys(hashObj).filter((val) => hashObj[val] === 1 );
    
    let output = "";
    distinct.forEach((val, index) => {
        if((index+1) === k) {
            output = val;
        } 
    });
    
    return output;
};