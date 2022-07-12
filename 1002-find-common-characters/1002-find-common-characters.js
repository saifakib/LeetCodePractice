/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
     let output = [];
// First brute force Approach but here time execution problem

//     let hashObj = {};
    
//     words.forEach((word) => {
//         word.split("").forEach((letter) => {
//             if(hashObj[letter]) {
//                 hashObj[letter]++;
//             } else {
//                 hashObj[letter] = 1;
//             }
//         });
//     });
    
//     // if key value are smaller than array length that means this letter not in all words
//     Object.keys(hashObj).forEach((key) => {
//         if(hashObj[key] < words.length) {
//             delete hashObj[key];
//         }
//     });
    
//     Object.keys(hashObj).forEach((key) => {
//         while(hashObj[key] > words.length - 1) {
//             if(words.every((word) => word.split("").includes(key))) {
//             output.push(key);
//             hashObj[key] -= 3;
//             }
//         }  
//     });
    
// Second Approach
    let frstWordArr = [...words[0]];
    
    for(let letter of frstWordArr) {
        if(words.every((word) => word.includes(letter))) {
            output.push(letter);
            words = words.map((word) => word.replace(letter, ""));
        }
    }
    return output;
};