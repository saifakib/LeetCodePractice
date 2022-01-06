/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let list = []
    if (nums.length < 3) return list
    nums = nums.sort((a, b) => a - b)

    for (let [index, number] of nums.entries()) {
        if (number > 0) return list
        if (number === nums[index - 1]) continue
        let left = index + 1
        let right = nums.length - 1
        let temp = 0

        while (left < right) {
            temp = nums[index] + nums[left] + nums[right];
            if (temp == 0) {
                list.push([nums[index], nums[left], nums[right]])
                left++
                right--

                while (left < right && nums[left] == nums[left - 1]) {
                    left++
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--
                }

            }
            else if (temp < 0) {
                left++
            }
            else if (temp > 0) {
                right--
            }
        }
    }
    return list
};

// var threeSum = function(nums) {
//        let list = []
//        for(let i=0, j=i+1; i<nums.length-1; i++,j++) {
//            let k
//            if(i==0 || i==1) {
//                k=2
//            } else{
//                k=0
//            }
//            if(nums[i] == nums[j]) continue
//             for(k; k<nums.length; k++) {
//                 if(k == i-1 || k == i || k == j) {
//                     continue
//                 } else{
//                     if(nums[i] + nums[j] + nums[k] == 0) {
//                     list.push([nums[i], nums[j], nums[k]])
//                     }
//                 }
//             }
//         } 
//        return list
// };

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))