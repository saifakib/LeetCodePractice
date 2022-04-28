/**
 * @param {number[]} nums
 * @return {number[]}
*/
let productExceptSelf = function(nums) {
    const res = nums.reduce((acc, cur, index, array) => {
        let total = 1
        for(let i=0; i<array.length; i++) {
            if(index !== i) {
                total = array[i] * total
            }
        }
        total == -0 ? acc[index] = 0 : acc[index] = total
        return acc
        }, [])
    return res
};

// 1st attemp
var productExceptSelff = function(nums) {
    let result = []
    for(let i=0; i<nums.length; i++) {
        let total = 1
        for(let j=0; j<nums.length; j++) {
            if(i !== j) {
                total = total * nums[j]
            }
        }
        if(total == -0) {
            result[i] = 0
        } else {
            result[i] = total
        }
    }
    return result;
}

// 2nd attempt
var productExceptSelfff = function(nums) {
    const ans = new Array(nums.length);
    let prefix = 1;
    for(let i=0; i<nums.length; i++) {
        ans[i] = prefix;
        prefix = prefix*nums[i];
    }
    let postfix = 1;
    for(let j=ans.length-1; j >=0 ; j--) {
        ans[j] = ans[j]*postfix;
        postfix = postfix*nums[j]
    }
    return ans;
}



const nums = [-1,1];
console.time('start')
const result = productExceptSelf(nums)
console.log(result)
console.timeEnd('start')


console.time('startt')
const resultt = productExceptSelff(nums)
console.log(resultt)
console.timeEnd('startt')

console.time('starttt')
const resulttt = productExceptSelfff(nums)
console.log(resulttt)
console.timeEnd('starttt')
