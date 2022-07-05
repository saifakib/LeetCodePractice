/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/**
* IDEA::
* Sort every individual word in array and take it a varibale 
* Then we take the common word from new variable array that will keys an object and here every keys store a individual array which take from origina array from index by matching new variable array;
* Take the Object Keys as an array and traverse it and push its value to a new array;
*/
var groupAnagrams = function(strs) {
    
    let output = [];
    
    let sortWords = strs.map((word) => word.split("").sort().join(""));
    
    let store = sortWords.reduce((acc, val, index) => {
        if(acc[val]) {
            acc[val].push(strs[index]);
            //acc[val] = [...acc[val], strs[index]]
        } else {
            acc[val] = [strs[index]];
        }
        return acc;
    }, {});
    
    Object.keys(store).forEach((key) => {
        output = [...output, store[key]];
    })
    
    return output;
};