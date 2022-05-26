/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
        // nums.forEach((i, index) => {
        //     let find = nums.find((i) => i==index);
        //     if(find == undefined) {
        //         return index;
        //     }
        // })
    for(let i=0; i<=nums.length; i++) {
        let find = nums.find((ele) => ele == i)
        if(find == undefined) {
             return i;
         }
    }
};