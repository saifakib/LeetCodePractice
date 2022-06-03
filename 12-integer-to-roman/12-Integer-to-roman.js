/**
 * @param {number} num
 * @return {string}
 */

//  const given = {
//         1: "I",
//         5: "V",
//         10: "X",
//         50: "L",
//         100: "C",
//         500: "D",
//         1000: "M"
// }
 
// let keys = Object.keys(given);

// function convertedToRoman(number) {
//     let endNum = keys.find((item) => item > number);
//     let difference = endNum - number;
//     if(given[difference]) {
//         return given[difference]
//     }
//     else {
//         let romanNum = "";
//         let endNumIndex = keys.findIndex((item) => item == endNum);
//         romanNum.concat(given[keys[endNumIndex-1]]);
//         let rest = number - keys[endNumIndex-1];
//         let firstNumIndex = keys.findIndex((item) => item < rest);
//         let count = keys[firstNumIndex];
//         romanNum.concat(given[keys[firstNumIndex]]);
//         while(rest !== count) {
//             if(count + keys[firstNumIndex] > rest) {
//                 firstNumIndex--
//             } else {
//                 count += keys[firstNumIndex];
//                 romanNum.concat(given[keys[firstNumIndex]]);
//             }
//         }
//         return romanNum;
//     }
// }

// function check(number) {
//     if(given[number]) {
//         return given[number];
//     } else {
//         return convertedToRoman(number)
//     }
// }
 
// var intToRoman = function(num) {
//     let output = "";
//     let devider = 10;
//     while(num !== 0) {
//         let getNumber = num%devider;
//         let romanValue = check(getNumber);
//         output = romanValue+output;
//         num = num - getNumber;
//         devider *= 10;
//     } 
//     return output;
// };
 
var intToRoman = function(num) {
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const M = ["", "M", "MM", "MMM"];   // 1 <= num <= 3999
    
    let Roman = M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] + I[Math.floor(num%10)];
    return Roman;
};
