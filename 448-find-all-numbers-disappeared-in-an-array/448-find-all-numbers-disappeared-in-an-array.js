/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let hashTbl= new Set([...nums]);
    let output = [];
    
    for(let i=1; i<=nums.length; i++) {
        if(!hashTbl.has(i)) {
            output.push(i)
        }
    }
    
    return output;
};