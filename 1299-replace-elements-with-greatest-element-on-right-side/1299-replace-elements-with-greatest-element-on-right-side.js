/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(i == arr.length - 1) {
            newArr[i] = -1
        } else {
            let greaterValue = -1;
            for(let j=i+1; j<arr.length; j++) {
                    if(greaterValue < arr[j]) {
                        greaterValue = arr[j]
                    }
            }
            newArr[i] = greaterValue;
        } 
    }
    return newArr;
};