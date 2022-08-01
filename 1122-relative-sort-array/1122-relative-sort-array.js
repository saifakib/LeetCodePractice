/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let output = [];
    
    let object = arr1.reduce((acc, val) => {
        if(acc[val]) {
            acc[val]++;
        }
        else {
            acc[val] = 1;
        }
        return acc;
    }, {})
    
    arr2.forEach((val) => {
        if(object[val]) {
            for(let i=0; i<object[val]; i++) {
                output.push(val)
            }
        }
        delete object[val];
    });
    
    
    let accending = Object.keys(object).sort((a,b) => a-b);

    accending.forEach((val) => {
        if(object[val]) {
            for(let i=0; i<object[val]; i++) {
                output.push(val)
            }
        }
        delete object[val];
    });
    
    return output;
    
};