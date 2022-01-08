/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = []
    let x = 0
    while(x < 2) {
        nums.map((num) =>{
            ans.push(num)
        })
        x++
    }
    return ans
};

let nums = [1,2,1]
getConcatenation(nums)
