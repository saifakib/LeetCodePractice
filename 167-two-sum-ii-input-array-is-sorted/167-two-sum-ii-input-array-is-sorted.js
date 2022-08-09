/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
//     let hash = numbers.reduce((acc, val, index) => {
//         if(!acc[val]) {
//             acc[val] = index;
//         }
//         return acc;
//     }, {});
    
    let output = [];
    
//     numbers.forEach((value, index) => {
//         let diff = target - value;
//         if(hash[diff] && value!==diff) {
//             output = [index+1, hash[diff]+1];
//             return;
//         }
//     })
    
    let start = 0;
    let end = numbers.length - 1;

    while(start < end) {
        let sum = numbers[start] + numbers[end];
        if(sum === target) {
            return output = [start+1, end+1];
        }
        else if(sum < target) {
            start++
        }
        else {
            end--;
        }
    }
    
    return output;
    
};