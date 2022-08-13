/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
//     let newArray = new Array(arr.length).fill(0);
//     let j = 0;
//     let i = 0;
//     while(i < newArray.length) {
//         if(arr[j] === 0) {
//             i = i+2;
//             j++;
//         }
//         else {
//             newArray[i] = arr[j];
//             j++;
//             i++;
//         }
//     }
    
//     return newArray;
    let i=0;
    while(i < arr.length) {
        if(arr[i] === 0) {
            arr.splice(i,0,0);
            arr.pop();
            i+=2;
        } else {
           i++; 
        }  
    }
    
    return arr;
};